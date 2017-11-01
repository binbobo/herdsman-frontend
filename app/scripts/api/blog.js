'use strict';

angular.module('herdsman.api.blog', ['herdsman.api.base']).service('BlogApiService', function ($http, $q, BaseApiService) {

  this.getAllBlogs = function () {
    return BaseApiService.list('/blogs');
  }

  this.getBlogById = function (id) {
    return BaseApiService.getById('/blogs/blog/:id', id);
  }

  this.createBlog = function (body) {
    return BaseApiService.post('/blogs/blog', body);
  }
});


