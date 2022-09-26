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

    // load all angularjs submodules
    function requireAll(r) {r.keys().forEach(r);}
    requireAll(require.context('./', true, /\.js$/));
})();