var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk')

////
var nodemailer = require('nodemailer');


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

      ////

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mitchellrh78@gmail.com',
          pass: 'Chloe*1226'
        }
      });
      
      var mailOptions = {
        from: '"Website Error" <mitchellrh78@gmail.com>',
        to: 'hornsbym19@outlook.com',
        subject: 'From ' + req.body.sender,
        text: err
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      ////
    } 
    else {
      res.send(data.Body.toJSON()) 
    };
  });
})

module.exports = router;
