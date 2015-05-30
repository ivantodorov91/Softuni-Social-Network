'use strict';

SoftUniSocialNetwork.controller('ProfileController', function ($scope, feed, feedPosts, authentication, $location, user, notifyService) {

    $scope.getUserFullData = function (username) {
        user.GetUserFullData(username,
            function(serverData) {
                $scope.currentUserData = serverData;
                console.log(serverData);
                $scope.currentUserData.isMe = false;
                if ($scope.currentUserData.username == localStorage.userName) {
                    $scope.currentUserData.isMe = true;
                }
            });
    };

    $scope.getUserWallByPages = function (username) {
        user.GetUserWallByPages(username,
            function(serverData) {
                $scope.feed = serverData;

                for (var post in $scope.feed) {
                    $scope.feed[post].postNumber = post;
                    $scope.feed[post].comments = $scope.feed[post].comments.reverse();
                }
            });
    };


    $scope.addNewPost = function() {
        feedPosts.AddNewPost(
            {
                postContent: $scope.postContent,
                username: $location.$$path.slice(6)
            }, function(serverData) {
                $scope.feed.unshift(serverData);
                for (var post in $scope.feed) {
                    $scope.feed[post].postNumber = post;
                }

                console.log(serverData);
            }, function(serverError) {
                notifyService.showError('Cannot add post', serverError);
            }
        )
    };

    $scope.sendFriendRequest = function() {
        user.SendFriendRequest(
            $scope.currentUserData.username,
            function(serverData) {
                notifyService.showInfo(serverData.message);
            },
            function(serverError) {
                notifyService.showError('Cannot be added to friedns!', serverError);
            }
        )
    };

    $scope.getUserFullData($location.$$path.slice(6));
    $scope.getUserWallByPages($location.$$path.slice(6));

});