'use strict';

var app = angular.module('todoApp');

app.controller('homeCtrl', function($scope, $rootScope, $interval) {
  console.log('homeCtrl!');
  $scope.currentDate = moment().format("MMMM YYYY");
  $scope.currentDoM = moment().format("Do");
  $scope.currentDay = moment().format("dddd");
  console.log($scope.currentDay);
  var tick = function() {
    $scope.currentTime = moment().format("h:mm:ss a");
  }
  tick();
  $interval(tick, 1000);
})
