'use strict';

SoftUniSocialNetwork.controller('FeedController', function ($scope, feed, authentication, $location, user, notifyService) {
    var temp;
    $scope.getFeed = function() {
        feed.getNewsFeed(function(serverData) {
            temp = serverData;
            console.log(temp);
            $scope.feed = serverData;
        }, function (serverError) {
            console.log(serverError);
        });
    };

    $scope.getShortFriendsList = function() {
        user.getMyFriendsPreview(function(serverData) {
            $scope.shortFriendsList = serverData;
        }, function(serverError) {
            console.log(serverError);
        });
    };

    $scope.getFeed();
    $scope.getShortFriendsList();

});