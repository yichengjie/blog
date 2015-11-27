var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login',{title:'登录页面'});
});

router.post('/',function(req,res,next){
	//前台提交数据过来，然后处理数据即可
	console.info("前台传递登录信息过来") ;
	console.info("-------------------------") ;
	console.info(req.body) ;
	console.info("-------------------------") ;
	res.end('hello world') ;
}) ;

module.exports = router;