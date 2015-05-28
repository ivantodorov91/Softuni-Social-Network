'use strict';

SoftUniSocialNetwork.controller('FeedController', function ($scope, feed, feedPosts, authentication, $location, user, notifyService) {

    $scope.getFeed = function() {
        feed.getNewsFeed(function(serverData) {
            $scope.feed = serverData;
            for (var post in $scope.feed) {
                $scope.feed[post].postNumber = post;
                $scope.feed[post].comments = $scope.feed[post].comments.reverse();
            }
        }, function (serverError) {
            notifyService.showError("Cannot show feed!", serverError);
        });
    };

    $scope.getShortFriendsList = function() {
        user.getMyFriendsPreview(function(serverData) {
            $scope.shortFriendsList = serverData;
        }, function(serverError) {
            console.log(serverError);
        });
    };

    $scope.likePost = function(postId) {
        feedPosts.likePost(postId,
            function(serverData) {
                notifyService.showInfo('Post LIKED!');
            }, function(serverError) {
                notifyService.showError('You cannot like this post!', serverError);
            });
    };

    $scope.getPostComments = function(postId, postNumber) {
        feedPosts.getPostComments(postId,
            function(serverData) {
                $scope.feed[postNumber].totalCommentsCount = serverData.length;
                $scope.feed[postNumber].comments = serverData.reverse();
            }, function(serverError) {

            });
    };


    $scope.hatePost = function(postId) {
        feedPosts.unLikePost(postId,
            function(serverData) {
                notifyService.showInfo('Disliked!');
            }, function(serverError) {
                notifyService.showError('You cannot like this post!', serverError);
            });
    };

    $scope.postComment = function(postId, commentContent, postnumber) {
        feedPosts.postComment(postId, {"commentContent": commentContent},
            function(serverData) {
                $scope.feed[postnumber]['comments'].push(serverData);
                notifyService.showInfo('Comment posted!');
            }, function(serverError) {
                notifyService.showError('Comment NOT posted!', serverError);
            });
    };


    $scope.getFeed();
    $scope.getShortFriendsList();

});