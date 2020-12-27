const express = require('express')
const AWS = require('aws-sdk')
const constants = require('../constants')

const router = express.Router();

router.post("/", (res, req) => {
    // Get a reference to the S3 client
    const s3 = new AWS.S3();

    const projectName = req.body.gameName

    const params = {
        Bucket: "games-hornsbym",
        Key: projectName + "/gameInformation.json"
    }

    s3.getObject((error, data) => {
        if (error) {
            console.log("Error getting profile picture")
            console.log(error, error.stack)
        } else {
            console.log(data)
        }
    })
})