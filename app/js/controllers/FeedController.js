'use strict';

SoftUniSocialNetwork.controller('FeedController', function ($scope, feed, feedPosts, authentication, $location, user, notifyService) {

    $scope.getFeed = function() {
        feed.GetNewsFeed(function(serverData) {
            $scope.feed = serverData;
            for (var post in $scope.feed) {
                $scope.feed[post].postNumber = post;
                $scope.feed[post].comments = $scope.feed[post].comments.reverse();
            }
        }, function (serverError) {
            notifyService.showError("Cannot show feed!", serverError);
        });
    };

    $scope.getFeed();

});