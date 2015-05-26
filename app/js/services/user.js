'use strict';

SoftUniSocialNetwork.factory('user', function ($http, baseServiceUrl, authentication) {
    var service = {};

    var serviceUrl = baseServiceUrl + '/users';

    service.getUserPreviewData = function (user, success, error) {
        $http.get(serviceUrl + '/' + user + '/preview', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.getUserFullData = function (user, success, error) {
        $http.get(serviceUrl + '/' + user, {headers: headers})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };


    service.searchUsersByName = function (searchData, success, error) {
        $http.get(serviceUrl + '/search?searchTerm=' + searchData, {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.getUserWallByPages = function (user, success, error) {
        $http.get(serviceUrl + '/' + user + '/wall?StartPostId=&PageSize=10', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.getFriendDetailedFriendsList = function (user, success, error) {
        $http.get(serviceUrl + '/' + user + '/friends', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.getFriendFriendsPreview = function (user, success, error) {
        $http.get(serviceUrl + '/' + user + '/friends/preview', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.getMyFriendsPreview = function (success, error) {
        $http.get(baseServiceUrl + '/me/friends/preview', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    return service;
});