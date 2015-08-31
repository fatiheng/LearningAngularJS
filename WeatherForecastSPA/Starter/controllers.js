// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$log', 'cityService',
	function($scope, $log, cityService){
		$scope.city = cityService.city;

		$scope.$watch('city', function(){
			cityService.city = $scope.city;
		});

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', '$log', 'cityService',
	function($scope, $resource, $routeParams, $log, cityService){
		$scope.city = cityService.city;	

		$scope.days = $routeParams.days || '2';

		$scope.weatherAPI = 
			$resource('http://api.openweathermap.org/data/2.5/forecast/daily',
			{callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

		$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

		$scope.convertToCelcius = function(degK) {
			return Math.round(degK - 273);
		};

		$scope.convertDate = function(dt) {
			return new Date(dt * 1000);
		}
}]);