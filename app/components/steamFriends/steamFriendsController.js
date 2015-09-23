angular.module('Steamify').controller('SteamFriendsController',
    function ($scope, $rootScope, SteamFriendsService) {
        var ctrlSF = this;
        ctrlSF.listFriends = SteamFriendsService.getDonnees();
        $scope.$on('showFriend', function (event, data) {
            if (ctrlSF.friend == false || angular.isUndefined(ctrlSF.friend)) {
                ctrlSF.friend = true;
            } else {
                ctrlSF.friend = false;
                ctrlSF.showProfil(ctrlSF.friend);
            }
        });
        ctrlSF.ihmStatutContact = function (contact) {
            return contact.idGame > 0 ? 'inGame' : (contact.statut === 'Hors Ligne' ? 'horsLigne' : 'noGame')
        }

        ctrlSF.showProfil = function (isVisible) {
            $rootScope.$broadcast('showProfil', {visible: isVisible});
        };
    }
);