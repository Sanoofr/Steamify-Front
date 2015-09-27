angular.module('Steamify').controller('SteamProfilController',
    function ($scope, $sce) {
        var ctrlSP = this;
        $scope.$on('showProfil', function (event, data) {
            if (data.visible) {
                ctrlSP.show = true;
                ctrlSP.profilURL = $sce.trustAsResourceUrl(data.profileurl);
            } else {
                ctrlSP.show = false;
            }
        });
    }
);