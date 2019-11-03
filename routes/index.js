var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.cookie('myCookies', 'ushkis').end('Cookie sent');
});

module.exports = router;
