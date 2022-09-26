import angular from 'angular'

(function () {
    'use strict';
    console.log('statoB')
    angular
      .module('testModule')
      .config(function ($stateProvider) {
        $stateProvider
          .state('statoB', {
            url: '/b',
            template: require('./statoB.html').default,
            controller: 'statoBCtrl'
          });
      })
      .controller('statoBCtrl', function($scope){
        $scope.format = 'M/d/yy h:mm:ss a';
      })
  })()