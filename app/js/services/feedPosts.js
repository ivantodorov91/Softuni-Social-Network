SoftUniSocialNetwork.factory('feedPosts', function ($http, baseServiceUrl, authentication) {
    var service = {};

    service.likePost = function (postId ,success, error) {
        $http({
            method: 'POST',
            url: baseServiceUrl + '/Posts/' + postId + '/likes',
            headers: authentication.GetHeaders()
        }).success(function(data){
            success(data);
        });
    };

    service.unLikePost = function (postId ,success, error) {
        $http.delete(baseServiceUrl + '/Posts/' + postId + '/likes', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.postComment = function (postId, data, success, error) {
        $http.post(
            baseServiceUrl + '/Posts/' + postId + '/comments', data, {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.getPostComments = function (postId ,success, error) {
        $http({
            method: 'GET',
            url: baseServiceUrl + '/Posts/' + postId + '/comments',
            headers: authentication.GetHeaders()
        }).success(function(data){
            success(data);
        });
    };


    service.AddNewPost = function(data, success, error) {
        $http({
            method: 'POST',
            url: baseServiceUrl + '/posts',
            headers: authentication.GetHeaders(),
            data: data
        }).success(function(data) {
            success(data);
        }).error(error);
    };

    service.DeletePostById = function(id, success, error) {
        $http({
            method: 'DELETE',
            url: baseServiceUrl + '/Posts/' + id,
            headers: authentication.GetHeaders()
        }).success(function(data) {
            success(data);
        }).error(error);
    };

    service.EditPostById = function(id,data, success, error) {
        $http({
            method: 'PUT',
            data: data,
            url: baseServiceUrl + '/Posts/' + id,
            headers: authentication.GetHeaders()
        }).success(function(data) {
            success(data);
        }).error(error);
    };

    return service;
});