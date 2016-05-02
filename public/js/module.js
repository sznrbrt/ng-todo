'use strict';


'use strict';

var app = angular.module('todoApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '/html/index.html',
      controller: 'homeCtrl',
    })

  $urlRouterProvider.otherwise('/');
});
