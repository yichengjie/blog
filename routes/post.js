var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('post',{title:'发表文件页面'});
});

router.post('/',function(req,res,next){

	
}) ;

module.exports = router;