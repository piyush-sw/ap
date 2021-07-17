var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arnav Packers' });
});

router.get('/corrugated-box-detail', function(req, res, next) {
  res.render('corrugated-box-details');
});

router.get('/duplex-box-details', function(req, res, next) {
  res.render('duplex-box-details');
});

router.get('/pastry-box-details', function(req, res, next) {
  res.render('pastry-box-details');
});

module.exports = router;
