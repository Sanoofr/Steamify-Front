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
            if (contact.gameextrainfo !== undefined) {
                return 'inGame';
            } else if (contact.personastate === 1) {
                return 'noGame';
            } else {
                return 'horsLigne';
            }
        }

        ctrlSC.getStatut = function (idStatut) {
            if (idStatut === undefined) {
                idStatut = 0;
            }
            var retour = "";
            switch (idStatut) {
                case 0:
                    retour = "Hors ligne";
                    break;
                case 1:
                    retour = "En ligne";
                    break;
                case 2:
                    retour = "Occupé(e)";
                    break;
                case 3:
                    retour = "Absent(e)";
                    break;
                case 4:
                    retour = "Snooze";
                    break;
                case 5:
                    retour = "looking to trade";
                    break;
                case 6:
                    retour = "looking to play";
                    break;
                default:
                    retour = "Statut inconnu";
            }
            return retour;
        }

        ctrlSC.showProfil = function (isVisible, profileurl) {
            $rootScope.$broadcast('showProfil', {visible: isVisible, profileurl: profileurl});
        };
    }
);