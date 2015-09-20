angular.module('Steamify').controller('SteamMenuController',
    function ($rootScope) {
        var ctrlSM = this;
        ctrlSM.isCollapsed = true;

        ctrlSM.showFriend = function () {
            $rootScope.$broadcast('showFriend');
        };
    }
);