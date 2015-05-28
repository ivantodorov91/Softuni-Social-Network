'use strict';

SoftUniSocialNetwork.controller('UserController', function ($scope, $location, $route, user, notifyService) {

    $scope.friendRequestMenu = false;

    $scope.getUserPreviewData = function(username) {
        user.getUserPreviewData(username,
            function(serverData) {
                console.log(serverData);
            },
            function (serverError) {
                notifyService.showError('cannot see friend', serverError);
            });
    };

    $scope.getFriendRequests = function() {
        user.getFriendRequests(
            function(serverData) {
                $scope.friendRequests = serverData;
            },
            function (serverError) {
                notifyService.showError('Cannot show friend requests', serverError);
            });
    };

    $scope.getMyUserData = function() {
        user.getMyUserData(
            function(serverData) {
                $scope.profilePicture = serverData.profileImageData;
            },
            function(serverError) {
                notifyService.showError('Cannot show profile photo!', serverError);
            });
    };

    $scope.acceptFriend = function(id) {
        user.acceptFriend(id,
        function(serverData) {
            notifyService.showInfo("friend accepted!")
        },
        function(serverError) {
            notifyService.showError("cannot accept friend", serverError)
        });
    };

    $scope.rejectFriend = function (id) {
        user.rejectFriend(id,
            function(serverData) {
                notifyService.showInfo("friend rejected!");
            },
            function(serverError) {
                notifyService.showError("cannot reject friend", serverError)
            });
    };

    $scope.getFriendRequests();
});