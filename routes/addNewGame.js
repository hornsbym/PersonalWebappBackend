const express = require('express')
const AWS = require('aws-sdk')
const constants = require('../constants')
const multer = require('multer')
const upload = multer() // TODO: Put S3 bucket value here?

const s3 = new AWS.S3();

const router = express.Router();

///////////////////////
// Route handler method
router.post("/", upload.any(), (req, res) => {
    console.log("********** Add Game Request Recieved")
    console.log(req.body)
    // console.log(req.files)
    postFilesToS3(req.files, req.body.uniqueIdentifier)
    postGameInformation(req.body)

    res.redirect(constants.REDIRECT_TO_CONSOLE)
})

/////////////////////////////////
// Various helper functions below

// Expects the game build files and photos provided as an array
// Requires a uniqueIdentifier to create a new "file" within S3
async function postFilesToS3(filesArray, uniqueIdentifier) {
    var buildFiles = []
    var photos = []

    // Sorts each file into either a build file or 
    // a photo
    for(let file of filesArray) {
        switch (file.fieldname) {
            case 'gameBuildFiles':
                buildFiles.push(file)
                break
            case 'gamePhotos':
                photos.push(file)
                break
        }
    }

    // console.log("***** BUILD")
    // console.log(buildFiles)

    // Upload the build files to S3
    for (let file of buildFiles) {
        // Only saves files that belong in the /Build/ folder
        // (anything with the unique identifier name and the unity loader)
        if (file.originalname.includes(uniqueIdentifier) || 
        file.originalname === "UnityLoader.js"){
            let params = {
                Body: file.buffer,
                Key: `${uniqueIdentifier}/Build/${file.originalname}`,
                Bucket: "games-hornsbym",
            }

            s3.putObject(params, (err, data) => {
                if (err) console.log(err)
                else {
                    console.log(`Successfully put build file ${file.originalname}`)
                    console.log(data)
                }
            })
        }
    }

    for (let photo of photos) {
        let params = {
            Body: photo.buffer,
            Key: `${uniqueIdentifier}/Photos/${photo.originalname}`,
            Bucket: "games-hornsbym",
        }

        s3.putObject(params, (err, data) => {
            if (err) console.log(err)
            else {
                console.log(`Successfully put photo ${photo.originalname}`)
                console.log(data)
            }
        })
    }
}

// Expects an object containing the following information:
//     - A unique identifier
//     - A game display name 
//     - Some game description text
function postGameInformation(gameData) {
    let uniqueIdentifier = gameData.uniqueIdentifier
    let gameName = gameData.displayName
    let descriptionParagraphs = (gameData.gameDescriptions).split(/\r?\n/)

    let payload = {
        gameName: gameName,
        gameDescriptionParagraphs: descriptionParagraphs
    }

    let params = {
        Body: JSON.stringify(payload),
        Key: `${uniqueIdentifier}/gameInformation.json`,
        Bucket: "games-hornsbym",
    }

    s3.putObject(params, (err, data) => {
        if (err) console.log(err)
        else {
            console.log(`Saved game information for ${uniqueIdentifier}`)
            console.log(data)
        }
    })
}

module.exports = router;
