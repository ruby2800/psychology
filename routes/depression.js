var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('depression/index',{title:'抑鬱'})
});

module.exports = router;
