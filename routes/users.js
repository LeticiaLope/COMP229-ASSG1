//<!--users.js, Leticia Lopez, 301087698, 09-10-2020-->
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
