'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'herdsman.home'
]).
config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);
