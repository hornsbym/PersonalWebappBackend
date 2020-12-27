const express = require('express');
const AWS = require('aws-sdk')
const constants = require('../constants')

const router = express.Router();

router.post("/", async (req, res) => {
    // Get a reference to the S3 client
    const s3 = new AWS.S3();

    // Establish which game we need photos of
    var projectName = req.body.gameName

    // Parameters for getting a list of all files in the project's photo "folder"
    var listObjectsParams = {
        Bucket: "games-hornsbym",
        Prefix: projectName + "/Photos/"
    }

    res.send(await new Promise((resolve, reject) => {
        // Gets a list of all photos in the photo bucket
        s3.listObjects(listObjectsParams, (err, data) => {
            // Handles errors in the case a failure while getting the list of objects
            if (err) {
                console.log(err, err.stack);

                // Assign the response object and reject the promise.
                response = {
                    statusCode: err.statusCode,
                    body: "An error occurred"
                };
                reject(response)
            }

            // Handles the case in which the objects are listed successfully 
            else {
                // Placeholder for holding all "getImage" promises
                var photoPaths = []

                // Logic for getting the photo objects
                data.Contents.forEach(listing => {
                    // Excludes folders from being returned
                    if (listing.Size > 0) {
                        // Creates a path to the S3 photos
                        photoPaths.push(constants.PATH_TO_GAMES_BUCKET + listing.Key);
                    }
                })

                // Returns the array of paths to the S3 photos
                resolve(photoPaths)
            }
        });
    }))
})

module.exports = router;
