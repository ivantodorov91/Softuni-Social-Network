'use strict';

SoftUniSocialNetwork.factory('notifyService',
    function () {
        return {
            showInfo: function(msg) {
                noty({
                        text: msg,
                        type: 'success',
                        layout: 'topCenter',
                        timeout: 1000}
                );
            },
            showError: function(msg, serverError) {
                // Collect errors to display from the server response
                var errors = [];
                if (serverError && serverError.message) {
                    errors.push(serverError.message);
                }
                if (serverError && serverError.error_description) {
                    var modelStateErrors = serverError.error_description;
                    errors.push(modelStateErrors);
                }
                if (errors.length > 0) {
                    msg = msg + "<br>" + errors.join("<br>");
                }
                noty({
                        text: msg,
                        type: 'error',
                        layout: 'topCenter',
                        timeout: 5000}
                );
            }
        }
    }
);