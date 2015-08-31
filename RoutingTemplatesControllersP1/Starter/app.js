var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(["$routeProvider",function ($routeProvider){
	
	// when / is in the hash, use the template and connect it to the controller
	$routeProvider
	.when('/', {
		// location of template
		templateUrl: 'pages/main.html',
		// what controller above template should be connected to
		controller: 'mainController'
	})
	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	});
}]);

myApp.controller('mainController', ['$scope', "$log", 
	function($scope, $log) {
    
		$scope.name = 'main';
    
}]);

myApp.controller('secondController', ['$scope', "$log", "$routeParams",
	function($scope, $log, $routeParams) {
    
		$scope.num = $routeParams.num;
    
}]);