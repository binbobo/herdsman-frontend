'use strict';

var HomeModule = angular.module('herdsman.home', ['ui.router', 'herdsman.api.blog']);

HomeModule.config(function ($stateProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/home',
    templateUrl: 'views/home/home.template.html',
    controller: 'HomeController'
  });
});

HomeModule.controller('HomeController', function ($scope, $state, BlogApiService) {
  BlogApiService.getAllBlogs().then(function (blogData) {
    $scope.blogs = blogData.data;
  });

  $scope.newBlog = {};

  $scope.createBlog = function () {
    // validate data
    if ($scope.newBlog.title && $scope.newBlog.author && $scope.newBlog.content) {
      BlogApiService.createBlog($scope.newBlog).then(function (blogData) {
        $state.reload();
      });
    }
  };
});
