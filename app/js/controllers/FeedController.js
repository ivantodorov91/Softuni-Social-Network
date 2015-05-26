'use strict';

SoftUniSocialNetwork.controller('FeedController', function ($scope, feed, authentication, $location, user, notifyService) {
var pesho;
    $scope.getFeed = function() {
        feed.getNewsFeed(function(serverData) {
            $scope.feed = serverData;
            var pesho = serverData;
            console.log(pesho);
        });
    };

    $scope.getShortFriendsList = function() {
        var username  = authentication.GetUsername();
        user.getMyFriendsPreview(function(serverData) {
            $scope.shortFriendsList = serverData;
        });
    };

    $scope.getFeed();
    $scope.getShortFriendsList();

});