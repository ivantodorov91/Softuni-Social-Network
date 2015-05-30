'use strict';

var SoftUniSocialNetwork = angular.module('SoftUniSocialNetwork', ['ngRoute', 'ngResource']);

SoftUniSocialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api')

SoftUniSocialNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/loginRegisterScreen.html',
            controller: 'AuthenticationController'
        })
        .when('/home', {
            templateUrl: 'templates/newsFeedScreen.html',
            controller: 'MainController'
        })
        .when('/user/logout', {
            templateUrl: 'templates/loginRegisterScreen.html',
            controller: 'AuthenticationController'
        })
        .when('/user/:username', {
            templateUrl: 'templates/profileScreen.html',
            controller: 'MainController'
        })
        .when('/profile/password', {
            templateUrl: 'templates/editPasswordScreen.html',
            controller: 'MainController'
        })
        .when('/profile' , {
            templateUrl: 'templates/editProfileScreen.html',
            controller: 'MainController'
        })
        .otherwise({redirectTo: '/'});
});