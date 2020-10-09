var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('pages/home', { title: 'Home'});
});

/* GET About Me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('pages/aboutme', { title: 'About Me'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('pages/projects', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('pages/services', { title: 'Services'});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'Contact'});
});


module.exports = router;
