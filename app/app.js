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
})(window.angular);