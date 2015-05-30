'use strict';

SoftUniSocialNetwork.factory('user', function ($http, baseServiceUrl, authentication) {
    var service = {};

    var serviceUrl = baseServiceUrl + '/users';

    service.GetUserPreviewData = function (user, success, error) {
        $http.get(serviceUrl + '/' + user + '/preview', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.GetUserFullData = function (user, success, error) {
        $http.get(serviceUrl + '/' + user, {headers: authentication.GetHeaders()})
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

    service.GetUserWallByPages = function (user, success, error) {
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

    service.GetFriendFriendsPreview = function (user, success, error) {
        $http.get(serviceUrl + '/' + user + '/friends/preview', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.GetMyFriendsPreview = function (success, error) {
        $http.get(baseServiceUrl + '/me/friends/preview', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.getFriendRequests = function (success, error) {
      $http.get(baseServiceUrl + '/me/requests', {headers: authentication.GetHeaders()})
          .success(function (data, status, headers, config) {
              success(data);
          }).error(error);
    };

    service.getMyUserData = function (success, error) {
        $http.get(baseServiceUrl + '/me' , {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.acceptFriend = function (id, success, error) {
        $http({
            method: 'PUT',
            url: baseServiceUrl + '/me/requests/'+ id + '?status=approved',
            headers:authentication.GetHeaders()
        }).success(function(data) {
            success(data);
        });
    };

    service.rejectFriend = function (id, success, error) {
        $http({
            method: 'PUT',
            url: baseServiceUrl + '/me/requests/'+ id + '?status=rejected',
            headers:authentication.GetHeaders()
        }).success(function(data) {
            success(data);
        });
    };

    service.SendFriendRequest = function (username, success, error) {
        $http({
            method: 'POST',
            url: baseServiceUrl + '/me/requests/' + username,
            headers: authentication.GetHeaders()
        }).success(function(data) {
            success(data);
        }).error(error);
    };


    service.ChangePassword = function (data, success,error) {
        $http({
            method: 'PUT',
            url: baseServiceUrl + '/me/changepassword',
            headers: authentication.GetHeaders(),
            data: data
        }).success(function(data, status, headers, config) {
            success(data);
        }).error(error);
    };

    service.EditProfile = function (data, success, error) {
      $http({
          method: 'PUT',
          url: baseServiceUrl + '/me',
          headers: authentication.GetHeaders(),
          data: data
      }).success(function (data, status, headers, config) {
          success(data);
      }).error(error);
    };


    return service;
});