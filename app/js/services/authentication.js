'use strict';

SoftUniSocialNetwork.factory('authentication', function ($http, baseServiceUrl) {
    var service = {};

    var serviceUrl = baseServiceUrl + '/users';

    service.Login = function (loginData, success, error) {
        $http.post(serviceUrl + '/Login', loginData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.Register = function (registerData, success, error) {
        $http.post(serviceUrl + '/Register', registerData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.SetCredentials = function (serverData) {
        localStorage['access_token'] = serverData.access_token;
        localStorage['userName'] = serverData.userName;
        localStorage['isAdmin'] = serverData.isAdmin ? serverData.isAdmin : false;
    };

    service.GetUsername = function() {
        return localStorage['userName'];
    };

    service.GetIsAdmin = function () {
        return localStorage['isAdmin'];
    };

    service.ClearCredentials = function () {
        localStorage.clear();
    };

    service.GetHeaders = function() {
        return {
            Authorization: "Bearer " + localStorage['access_token']
        };
    };

    service.isLoggedIn = function () {
        return localStorage['access_token'];
    };

    return service;
});