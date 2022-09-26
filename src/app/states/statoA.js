import angular from 'angular'

(function () {
    'use strict';
    console.log('statoA')
    angular
      .module('testModule')
      .config(function ($stateProvider) {
        $stateProvider
          .state('statoA', {
            url: '/a',
            templateUrl: '/src/app/states/statoA.lazy.html',
            controller: 'statoACtrl'
          })
      })
      .controller('statoACtrl', function($scope){
        $scope.messaggio = 'Ciao, sei in stato A!'
        $scope.onUpdated = function(event) {
          console.log('updated', event)
        }
        $scope.onClicked = function(event) {
          console.log('clicked', event)
        }
      })
  })()