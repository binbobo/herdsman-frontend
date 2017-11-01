'use strict';

var BlogModule = angular.module('herdsman.blog', ['ui.router']);

BlogModule.config(function ($stateProvider) {
  $stateProvider.state({
    name: 'blog',
    url: '/blog',
    templateUrl: 'views/blog/list.html'
  });
});
