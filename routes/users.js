var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('IM A SECRET GAGAGA');
});

router.get('/del', function(req, res, next) {
  res.send('i have eaten you cookies gagagagagagagagag');
});

module.exports = router;
