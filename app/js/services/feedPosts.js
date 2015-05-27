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
    return service;
});