'use strict';

/**
 * @ngdoc function
 * @name alphaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the alphaApp
 */
angular.module('alphaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
