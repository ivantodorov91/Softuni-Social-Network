'use strict';

SoftUniSocialNetwork.controller('MainController', function ($scope,authentication, $location, user, notifyService) {
    $scope.username = authentication.GetUsername();
    $scope.access_token = localStorage.access_token;
    $scope.isAdmin = authentication.GetIsAdmin();
    $scope.isNotAdmin = (!$scope.isAdmin || $scope.isAdmin == "false");

    var path = $location.path();
    if ((path.indexOf("user") != -1) && !authentication.isLoggedIn()) {
        $location.path("/");
    }
});
