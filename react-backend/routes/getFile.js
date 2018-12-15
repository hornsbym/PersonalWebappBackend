var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk')

router.post('/', function (req, res) {
  const target = req.body.location;
  const s3 = new AWS.S3();
  console.log('Getting file from', target)

  const params = {  // Contains information about the file to be searched for.
    Bucket: "hornsbym.github.io-resources",  // Where the file should be looked for; defined in serverless.yml.
    Key: target  // The name of the file to be searched for.
  };

  s3.getObject(params, function (err, data) {
    if (err) {
      console.log(err, err.stack)
    } 
    else {
      console.log(data.Body)
      res.send(data.Body.toJSON()) 
    };
  });
})

module.exports = router;
