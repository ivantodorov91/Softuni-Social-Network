'use strict';

SoftUniSocialNetwork.controller('PostsController', function ($scope, feedPosts,authentication, $location, user, notifyService) {

    $scope.likePost = function(postId) {
        feedPosts.likePost(postId,
            function(serverData) {
                notifyService.showInfo('Post LIKED!');
            }, function(serverError) {
                notifyService.showError('You cannot like this post!', serverError);
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


});
