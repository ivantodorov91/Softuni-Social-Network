SoftUniSocialNetwork.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var location = $window.location.hash;

            if(location == '#/home') {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    scope.test(element);
                }
            }
        });
    };
});