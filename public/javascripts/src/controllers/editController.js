var controllers = require('./controllers.js') ;
controllers.controller('EditController', ['$scope','FormData' ,function ($scope,FormData) {
	$scope.data = FormData ;
}]) ;


controllers.controller('LoginController', ['$scope','$http', function ($scope,$http) {
	$scope.data = {
		name:"",
		password:""
	} ;

	$scope.login = function(){
 		//console.info($scope.data) ;
 		var url = "/login" ;
 		$http.post(url,$scope.data)
 		.success(function(result){
             console.info(result) ;
             alert("登录成功") ;
         }); 
	} ;

}]) ;


controllers.controller('PostController', ['$scope', function ($scope) {


	
}]) ;


controllers.controller('RegistController', ['$scope', function ($scope) {

	$scope.data = {
		name:"",
		password:"",
		password2:"",
		email:"",
		
	} ;

	$scope.regist = function(){
 		console.info($scope.data) ;
	} ;
	
}]) ;
