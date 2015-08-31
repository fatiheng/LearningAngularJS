// MODULE
/* In html, the ng-app="angularApp" attribute looks for the next line of code
and matches the first argument of module() to ng-app. This is in order to connect 
the data (below) to the view (html)*/
var angularApp = angular.module('angularApp', []);

// CONTROLLERS for view
angularApp.controller('mainController', ['$scope', function ($scope) {
    /* any code (this is the model) in here will be associated
     with controlling the html elements ng-controller="mainController" */
}]);



