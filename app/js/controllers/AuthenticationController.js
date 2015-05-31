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
                $location.path('/home');
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Login!", serverError);
            });
    };

    $scope.logout = function () {
        authentication.Logout(
            function(serverData) {
                $location.path('/');
                notifyService.showInfo(serverData.message);
                ClearData();
                authentication.ClearCredentials();
            },
            function(serverError) {
                notifyService.showError("Cannot logout", serverError);
            }
        )
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