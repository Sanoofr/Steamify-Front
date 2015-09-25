angular.module('Steamify').controller('SteamContactsController',
    function ($scope, $rootScope, SteamContactsService) {
        var ctrlSC = this;
        ctrlSC.listFriends = SteamContactsService.getDonnees();
        $scope.$on('showFriend', function (event, data) {
            if (ctrlSC.friend == false || angular.isUndefined(ctrlSC.friend)) {
                ctrlSC.friend = true;
            } else {
                ctrlSC.friend = false;
                ctrlSC.showProfil(ctrlSC.friend);
            }
        });
        ctrlSC.ihmStatutContact = function (contact) {
            return contact.idGame > 0 ? 'inGame' : (contact.statut === 'Hors Ligne' ? 'horsLigne' : 'noGame')
        }

        ctrlSC.showProfil = function (isVisible) {
            $rootScope.$broadcast('showProfil', {visible: isVisible});
        };
    }
);