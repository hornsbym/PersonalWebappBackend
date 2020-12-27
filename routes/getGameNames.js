const express = require('express');
const AWS = require('aws-sdk')

const router = express.Router();

router.get("/", async function(request, res) {
    // Get a reference to the S3 client
    const s3 = new AWS.S3();

    var params = {
        Bucket: "games-hornsbym",
        Delimiter: "Builds.json"
    }

    res.send(await new Promise((resolve, reject) => {
        s3.listObjects(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                let response = {
                    statusCode: err.statusCode,
                    body: "An error occurred"
                };

                reject(response)
            } else {
                var uniqueGameNames = [];
                data.Contents.forEach((contentsObject) => {
                    let name = contentsObject.Key.split("/")[0];
                    if (!uniqueGameNames.includes(name)) {
                        uniqueGameNames.push(name)
                    }
                })

                let response = {
                    statusCode: 200,
                    body: JSON.stringify({"gameNames":uniqueGameNames})
                };

                resolve(response)
            }
        });
    }))
});

module.exports = router;
