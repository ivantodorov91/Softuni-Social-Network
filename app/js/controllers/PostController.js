'use strict';

SoftUniSocialNetwork.controller('PostController', function ($scope, feed, feedPosts, authentication, $location, user, notifyService) {

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

    $scope.deletePostById = function (id, postNumber) {
        feedPosts.DeletePostById(id,
        function(serverData) {
            notifyService.showInfo('Post deleted!');

            $scope.feed.splice(postNumber - 1, postNumber);

            for (var post in $scope.feed) {
                $scope.feed[post].postNumber = parseInt(post) + 1;
            }
        },
        function(serverError) {
            notifyService.showError('Cannot delete post', serverError);
        });
    };

    $scope.editPostById = function (id, postNumber) {
        feedPosts.EditPostById(id,
            {
                postContent: $scope.posts.postContent
            },
            function(serverData) {
                notifyService.showInfo('Post edited!');
            },
            function(serverError) {
                notifyService.showError('Cannot edit post', serverError);
            });
    };

});
