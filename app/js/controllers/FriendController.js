'use strict';

SoftUniSocialNetwork.controller('FriendController', function ($scope, feed, feedPosts, authentication, $location, user, notifyService) {

    $scope.getShortFriendsList = function() {
        user.GetMyFriendsPreview(function(serverData) {
            $scope.shortFriendsList = serverData;
        }, function(serverError) {
            console.log(serverError);
        });
    };



    $scope.getFriendFriendsPreview = function(username) {
        user.GetFriendFriendsPreview(username,
            function(serverData) {
                $scope.shortFriendsList = serverData;
            });
    };

    if ($location.$$path == '/home' || $location.$$path.slice(6) == localStorage.userName) {
        $scope.getShortFriendsList();
    } else {
        $scope.getFriendFriendsPreview($location.$$path.slice(6));
    }


});
