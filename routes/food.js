var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('food/index', { title: '你只是心生病了' });
});

module.exports = router;