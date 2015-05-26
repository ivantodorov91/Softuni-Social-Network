SoftUniSocialNetwork.factory('feed', function ($http, baseServiceUrl, authentication) {
    var service = {};

    service.getNewsFeed = function (success, error)  {
        $http.get(baseServiceUrl + '/me/feed?StartPostId=&PageSize=10', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.likePost = function (postId ,success, error) {
        $http.post(baseServiceUrl + '/Posts/' + postId + '/likes', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    service.unLikePost = function (postId ,success, error) {
        $http.delete(baseServiceUrl + '/Posts/' + postId + '/likes', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    return service;
});