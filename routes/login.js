var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login',{title:'登录页面'});
});

router.post('/',function(req,res,next){



}) ;

module.exports = router;