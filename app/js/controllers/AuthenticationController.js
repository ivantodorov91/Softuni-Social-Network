'use strict';

SoftUniSocialNetwork.controller('AuthenticationController', function ($scope, $location, $route,
                                                            authentication, notifyService) {

    var ClearData = function() {
        $scope.loginData = "";
        $scope.registerData = "";
        $scope.userData = "";
        $scope.posswordData = "";
    };

    $scope.login = function () {
        authentication.Login($scope.loginData,
            function(serverData) {
                notifyService.showInfo("Successfully logged in!");
                authentication.SetCredentials(serverData);
                ClearData();

                if (authentication.GetIsAdmin() == "true") {
                    $location.path('/admin/home');
                } else {
                    $location.path('/home');
                }
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Login!", serverError);
            });
    };

    $scope.logout = function () {
        notifyService.showInfo("Successful Logout!");
        ClearData();
        authentication.ClearCredentials();
        $location.path('/');
    };

    $scope.register = function() {
        authentication.Register($scope.registerData,
            function(serverData) {
                notifyService.showInfo("Successful Register!");
                authentication.SetCredentials(serverData);
                ClearData();
                $location.path('/home');
            },
            function(serverError) {
                notifyService.showError("Unsuccessful Register!", serverError);
            });
    };


    $scope.loggedIn = function() {
        return authentication.isLoggedIn();
    };
});