import angular from 'angular'
import uiRouter from 'angular-ui-router'
import * as VueLibrary from './wc/VueLibrary.umd.min.js'
import './app.css'

(function () {
  'use strict';
  VueLibrary.register()
  angular
    .module('testModule',
      [
        uiRouter
      ])
    .config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/a');
    })
    .config(function ($stateProvider) {
      $stateProvider
        .state('statoA', {
          url: '/a',
          templateUrl: '/src/app/statoA.lazy.html',
          controller: 'statoACtrl'
        })
        .state('statoB', {
          url: '/b',
          template: require('./statoB.html').default,
          controller: 'statoBCtrl'
        });
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
    .controller('statoBCtrl', function($scope){
      $scope.format = 'M/d/yy h:mm:ss a';
    })
    .directive('myCurrentTime', function($interval, dateFilter) {
      function link(scope, element, attrs) {
        var format,
            timeoutId;
        function updateTime() {
          element.text(dateFilter(new Date(), format));
        }
        scope.$watch(attrs.myCurrentTime, function(value) {
          format = value;
          updateTime();
        });
        element.on('$destroy', function() {
          $interval.cancel(timeoutId);
        });
        timeoutId = $interval(function() {
          updateTime(); // update DOM
        }, 1000);
      }
      return {
        link: link
      };
    })
    ;
})();