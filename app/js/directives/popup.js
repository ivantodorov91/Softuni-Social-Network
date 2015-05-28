SoftUniSocialNetwork.directive('popup', function() {
    var popup = {
        link : function(scope, iElement, iAttrs){
            //code to wrap the div (iElement) with a abs pos div (parentDiv)
            // code to add a mask layer div behind
            // if the parent is already there, then skip adding it again.
            //use jquery ui to make it dragable etc.
            scope.watch(showPopup, function(newVal, oldVal){
                if(newVal === true){
                    $(parentDiv).show();
                }
                else{
                    $(parentDiv).hide();
                }
            });
        }


    };

    return popup;
});