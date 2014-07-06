'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/articles/:name', {templateUrl: 'partials/article.html', controller: 'articleCtrl'});
  $routeProvider.when('/logging', {templateUrl: 'partials/logging.html', controller: 'loggingCtrl'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
  $routeProvider.when('/404', {templateUrl: 'partials/404.html', controller: ''});
  $routeProvider.otherwise({redirectTo: '/404'});
}]);
