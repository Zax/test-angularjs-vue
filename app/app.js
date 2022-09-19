(function (angular) {
  'use strict';
  angular
    .module('testModule',
      [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
      ])
    .config(function ($urlRouterProvider) {
      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
      $urlRouterProvider.otherwise('/');
    })
})(window.angular);