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
    .config(function ($stateProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'app/main.html',
          controller: 'mainCtrl'
        });
    })
    .controller('mainCtrl', function($scope){
      $scope.prova = 'ciao'
    });
})(window.angular);