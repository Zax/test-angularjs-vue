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
      $urlRouterProvider.otherwise('/a');
    })
    .config(function ($stateProvider) {
      $stateProvider
        .state('statoA', {
          url: '/a',
          templateUrl: 'app/statoA.html',
          controller: 'statoACtrl'
        })
        .state('statoB', {
          url: '/b',
          templateUrl: 'app/statoB.html',
          controller: 'statoBCtrl'
        });
    })
    .controller('statoACtrl', function($scope){
      $scope.messaggio = 'Ciao, sei in stato A!'
    })
    .controller('statoBCtrl', function($scope){
      $scope.messaggio = 'Ciao, sei in stato B!'
    });
    ;
})(window.angular);