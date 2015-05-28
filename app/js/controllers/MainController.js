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

    $scope.getProfilePhoto = function() {
        user.getMyUserData(
            function(serverData) {
                $scope.profilePicture = serverData.profileImageData;
            });
    };

    $scope.searchUsersByName = function() {
        var searchData = $scope.searchBoxData;
        if (searchData.length > 0) {
            user.searchUsersByName(searchData,
                function(serverData) {
                    $scope.returnedSearchData = serverData;
                });
        }
    };

    $scope.dateFilter = function(date) {
        var date = new Date(date);
        var dateCreated = date.toLocaleString();


        return dateCreated;
    };

    $scope.getProfilePhoto();


});
