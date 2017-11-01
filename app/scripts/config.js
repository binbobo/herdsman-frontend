'use strict';

angular.module('herdsman.config', []).value('ConfigService', {
  apiConfig: {
    'host': 'localhost',
    'port': '8080',
    'baseUrl': function () {
      return 'http://' + this.host + ':' + this.port + '/api'
    }
  }
});
