SoftUniSocialNetwork.factory('feed', function ($http, baseServiceUrl, authentication) {
    var service = {};

    service.getNewsFeed = function (success, error)  {
        $http.get(baseServiceUrl + '/me/feed?StartPostId=&PageSize=10', {headers: authentication.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    return service;
});