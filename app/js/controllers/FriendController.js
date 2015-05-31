'use strict';

SoftUniSocialNetwork.controller('FriendController', function ($scope, feed, feedPosts, authentication, $location, user, notifyService) {

    $scope.getShortFriendsList = function() {
        user.GetMyFriendsPreview(function(serverData) {
            $scope.shortFriendsList = serverData;
        }, function(serverError) {
            console.log(serverError);
        });
    };

    $scope.getMyFullFriendsList = function() {
        user.GetMyFullFriendsList(function(serverData) {
            $scope.fullFriendsList = serverData;
        });
    };

    $scope.getFriendFullFriendsList = function (username) {
        user.GetFriendFullFriendsList(username,
            function(serverData) {
                $scope.fullFriendsList = serverData;
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
    } else if (($location.$$path.indexOf('/user/') == 0) && ($location.$$path.slice(6) != localStorage.userName)) {
       $scope.getFriendFriendsPreview($location.$$path.slice(6));
    }

    if ($location.$$path == '/users/' + localStorage.userName + '/friends') {
        $scope.getMyFullFriendsList();
    } else if (($location.$$path.indexOf('/users/') == 0) &&
        ($location.$$path.slice(6) != localStorage.userName) &&
        ($location.$$path.indexOf('/friends') > 0)) {

        $scope.getFriendFullFriendsList($scope.friendsListOwner);
    }


});
