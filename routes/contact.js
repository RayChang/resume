var express = require('express');
var request = require('request');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();

var config = require('../config');

/* GET users listing. */
router.post('/', function(req, res) {
  let verificationUrl;
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
    return res.json({
      'responseCode': 1,
      'responseDesc': 'Please select captcha'
    });
  }
  verificationUrl = 'https://www.google.com/recaptcha/api/siteverify?secret=' + config.recaptchaKey + '&response=' + req.body['g-recaptcha-response'] + '&remoteip=' + req.connection.remoteAddress;
  request(verificationUrl, (error, response, body) => {
    body = JSON.parse(body);
    if(body.success !== undefined && !body.success) {
      return res.json({
        'responseCode': 1,
        'responseDesc': 'Failed captcha verification'
      });
    }
    MongoClient.connect(config.mongodbPath, (err, db) => {
      if(!err) {
        db.collection('contact').insert({
          name: req.body.name,
          email: req.body.email,
          message: req.body.message,
          time: new Date()
        }, (err, result) => {
          if(!err) {
            res.json({
              'responseCode': 0,
              'responseStatus': true,
              'responseDesc': 'Thank You!'
            });
          } else {
            res.json({
              'responseCode': 0,
              'responseDesc': 'Write failed'
            });
          }
        })
      } else {
        res.json({
          'responseCode': 0,
          'responseDesc': 'Databese lost connect'
        });
      }
    });
  });
});

module.exports = router;
