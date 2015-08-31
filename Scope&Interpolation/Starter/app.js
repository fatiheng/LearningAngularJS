var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', ["$scope", "$timeout", 
	function($scope, $timeout) {
    

	$scope.name = "Felix";
	$timeout(function() {
		$scope.name = "Everbody";
	}, 3000);
    
}]);