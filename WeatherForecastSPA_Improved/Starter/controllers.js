// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', '$log', 'cityService',
	function($scope, $location, $log, cityService){
		$scope.city = cityService.city;

		$scope.$watch('city', function(){
			cityService.city = $scope.city;
		});

		$scope.submit = function() {
			$location.path("/forecast");
		};
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', '$log', 'cityService', 'weatherService',
	function($scope,  $routeParams, $log, cityService, weatherService){
		$scope.city = cityService.city;	

		$scope.days = $routeParams.days || '2';

		$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

		$scope.convertToCelcius = function(degK) {
			return Math.round(degK - 273);
		};

		$scope.convertDate = function(dt) {
			return new Date(dt * 1000);
		}
}]);