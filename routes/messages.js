var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res) {
  if(req.session['isLogin']) {
    MongoClient.connect(config.mongodbPath, (err, db) => {
      if(!err) {
        db.collection('contact').find().toArray((err, result) => {
          if(!err) {
            res.render('message', {messages: result});
          } else {
            res.render('message', {message: 'Data query failed'});
          }
        });
      } else {
        res.render('message', {message: 'Data query failed'});
      }
    });
  } else {
    res.render('login');
  }
});
router.post('/', function(req, res) {
  let username, password;
  username = req.body.username;
  password = req.body.password;
  if(config.userName === username && config.password === password) {
    req.session['isLogin'] = true;
    console.log(req.session)
    res.redirect('/messages');
  } else {
    res.redirect('/messages');
  }
});

module.exports = router;
