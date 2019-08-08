var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/', function(req, res) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mitchellrh78@gmail.com',
          pass: 'Chloe*1226'
        }
      });
      
      var mailOptions = {
        from: '"Website Message" <mitchellrh78@gmail.com>',
        to: 'hornsbym19@outlook.com',
        subject: 'From ' + req.body.sender,
        text: req.body.message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  });

module.exports = router;



