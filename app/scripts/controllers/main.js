'use strict';

/**
 * @ngdoc function
 * @name alphaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alphaApp
 */
angular.module('alphaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
