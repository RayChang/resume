var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', {title: 'Ray Chang - Resume', lang: req.lang});
});

module.exports = router;
