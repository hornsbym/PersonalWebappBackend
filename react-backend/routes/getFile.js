var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk')

router.post('/', function (req, res) {
  const target = req.body.location;
  const s3 = new AWS.S3();

  // Contains information about the file to be searched for.
  const params = {  
    Bucket: "hornsbym.github.io-resources",
    Key: target  // The name of the file to be searched for.
  };

  s3.getObject(params, function (err, data) {
    if (err) {
      console.log(err, err.stack)
    } 
    else {
      res.send(data.Body.toJSON()) 
    };
  });
})

module.exports = router;
