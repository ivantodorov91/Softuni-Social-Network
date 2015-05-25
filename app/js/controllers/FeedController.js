'use strict';

SoftUniSocialNetwork.controller('FeedController', function ($scope, feed, authentication, $location, user, notifyService) {
var pesho;
    $scope.getFeed = function() {
        feed.getNewsFeed(function(serverData) {
            $scope.feed = serverData;
            console.log(serverData);
        }, function (serverError) {
            console.log(serverError);
        })
    };

    $scope.getFeed();

});