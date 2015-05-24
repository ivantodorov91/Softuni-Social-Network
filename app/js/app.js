'use strict';

var SoftUniSocialNetwork = angular.module('SoftUniSocialNetwork', ['ngRoute']);

SoftUniSocialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api')

SoftUniSocialNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/loginRegisterScreen.html',
            controller: 'MainController'
        }).otherwise({redirectTo: '/'});
});