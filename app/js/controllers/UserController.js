'use strict';

SoftUniSocialNetwork.controller('UserController', function ($scope, $location, $route, user, notifyService) {

    $scope.friendRequestMenu = false;

    $scope.getFriendRequests = function() {
        if (localStorage.access_token) {
            user.getFriendRequests(
                function(serverData) {
                    $scope.friendRequests = serverData;
                },
                function (serverError) {
                    notifyService.showError('Cannot show friend requests', serverError);
                });
        }
    };

    $scope.getMyUserData = function() {
        user.getMyUserData(
            function(serverData) {
                $scope.profilePicture = serverData.profileImageData;
            },
            function(serverError) {
                notifyService.showError('Cannot show profile photo!', serverError);
            });
    };

    $scope.acceptFriend = function(id) {
        user.acceptFriend(id,
        function(serverData) {
            notifyService.showInfo("friend accepted!")
        },
        function(serverError) {
            notifyService.showError("cannot accept friend", serverError)
        });
    };

    $scope.rejectFriend = function (id) {
        user.rejectFriend(id,
            function(serverData) {
                notifyService.showInfo("friend rejected!");
            },
            function(serverError) {
                notifyService.showError("cannot reject friend", serverError)
            });
    };

    $scope.changePassword = function() {
        user.ChangePassword(
            {
                oldPassword: $scope.passChangeData.oldPassword,
                newPassword: $scope.passChangeData.newPassword,
                confirmPassword: $scope.passChangeData.confirmNewPassword
            },function(serverData) {
                $location.path('/home');
                notifyService.showInfo(serverData.message);
            }, function(serverError) {
                notifyService.showError('Cannot change password', serverError);
            });
    };

    $scope.editProfile = function() {
        var profilePic = document.getElementById('avatarPic').src,
            coverPic = document.getElementById('coverPic').src;

        user.EditProfile(
            {
                name: $scope.myUserData.name,
                email: $scope.myUserData.email,
                profileImageData: profilePic,
                coverImageData: coverPic,
                gender: $scope.myUserData.gender
            }, function(serverData) {
                $location.path('/home');
                notifyService.showInfo(serverData.message);
            }, function(serverError) {
                notifyService.showError('Cannot edit profile', serverError);
            });
    };

    $scope.openFileUploaderForAvatar = function() {
        document.getElementById('fileUploaderForAvatar').click();
    };

    $scope.openFileUploaderForCover = function() {
        document.getElementById('fileUploaderForCover').click();
    };

    $scope.uploadAvatar = function(element) {
        $scope.$apply(function(scope) {
            var photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                if(e.total <= 128000) {
                    document.getElementById("avatarPic").src = e.target.result;
                } else {
                    notifyService.showError('File too big');
                }
            };
            reader.readAsDataURL(photofile);
        });
    };

    $scope.uploadCover = function(element) {
        $scope.$apply(function(scope) {
            var photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                if(e.total <= 1024000) {
                    document.getElementById("coverPic").src = e.target.result;
                } else {
                    notifyService.showError('File too big');
                }
            };
            reader.readAsDataURL(photofile);
        });
    };



    $scope.getFriendRequests();
});