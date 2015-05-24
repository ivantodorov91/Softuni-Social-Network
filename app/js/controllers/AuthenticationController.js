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
                    $location.path('/user/home');
                }
            },
            function (serverError) {
                notifyService.showError("Unsuccessful Login!", serverError);
            });
    };

    $scope.register = function() {
        authentication.Register($scope.registerData,
            function(serverData) {
                notifyService.showInfo("Successful Register!");
                authentication.SetCredentials(serverData);
                ClearData();
                $location.path('/user/home');
            },
            function(serverError) {
                notifyService.showError("Unsuccessful Register!", serverError);
            });
    };








});