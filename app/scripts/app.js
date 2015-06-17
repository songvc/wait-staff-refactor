'use strict';

/**
 * @ngdoc overview
 * @name waitStaffRefactorApp
 * @description
 * # waitStaffRefactorApp
 *
 * Main module of the application.
 */
var myApp = angular
  .module('waitStaffRefactorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new-meal', {
        templateUrl: 'views/new-meal.html',
        controller: 'MainCtrl'
      })
      .when('/my-earnings', {
        templateUrl: 'views/my-earnings.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
