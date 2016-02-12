'use strict';

angular.module('myProjectApp.auth', [
  'myProjectApp.constants',
  'myProjectApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
