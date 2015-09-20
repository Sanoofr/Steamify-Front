angular.module('Steamify').controller('SteamFriendsController',
    function ($scope, SteamFriendsService) {
        var ctrlSF = this;
        ctrlSF.listFriends = SteamFriendsService.getDonnees();
        $scope.$on('showFriend', function (event, data) {
            if (ctrlSF.friend == false || angular.isUndefined(ctrlSF.friend)) {
                ctrlSF.friend = true;
            } else {
                ctrlSF.friend = false;
            }
        });
    }
);