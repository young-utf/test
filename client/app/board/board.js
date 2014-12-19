/**
 * Created by youngmoon on 12/19/14.
 */
'use strict';

angular.module('ninjaTestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/board', {
        templateUrl: 'app/board/board.html',
        controller: 'BoardCtrl'
      });
  });
