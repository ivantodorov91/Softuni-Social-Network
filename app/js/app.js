'use strict';

var SoftUniSocialNetwork = angular.module('SoftUniSocialNetwork', ['ngRoute', 'ngResource']);

SoftUniSocialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api')

SoftUniSocialNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/loginRegisterScreen.html',
            controller: 'MainController'
        })
        .when('/home', {
            templateUrl: 'templates/newsFeedScreen.html',
            controller: 'MainController'
        })
        .when('/user/logout', {
            templateUrl: 'templates/loginRegisterScreen.html',
            controller: 'MainController'
        })
        .when('/user/me', {
            templateUrl: 'templates/profileScreen.html',
            controller: 'MainController'
        })
        .when('/user/:username', {
            templateUrl: 'templates/userScreen.html',
            controller: 'MainController'
        })
        .otherwise({redirectTo: '/'});
});