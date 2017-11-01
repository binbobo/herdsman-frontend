'use strict';

angular.module('herdsman.api.base', ['herdsman.config']).service('BaseApiService', function ($http, $q, ConfigService) {
  var baseURL = ConfigService.apiConfig.baseUrl();

  this.list = function (url) {
    return $http.get(baseURL + url).then(function (response) {
      return response.data;
    }, errorHandler);
  }

  this.getById = function (url, id) {
    return $http.get(baseURL + url, {id: id}).then(function (response) {
      return response.data;
    }, errorHandler);
  }

  this.post = function (url, data) {
    return $http.post(baseURL + url, data).then(function (response) {
      return response.data;
    }, errorHandler);
  }

  function errorHandler(response) {
    console.log(response)
  }
});
