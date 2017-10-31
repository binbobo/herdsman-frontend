'use strict';

var HomeModule = angular.module('herdsman.home', ['ui.router']);

HomeModule.config(function ($stateProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/home',
    templateUrl: 'views/home/home.template.html',
    controller: function () {
      $('body').append('<p>jQuery test(append())</p>')
    }
  });
});
