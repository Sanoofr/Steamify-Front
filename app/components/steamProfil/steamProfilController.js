angular.module('Steamify').controller('SteamProfilController',
    function ($scope) {
        var ctrlSP = this;
        $scope.$on('showProfil', function (event, data) {
            if (data.visible) {
                ctrlSP.show = true;
            } else {
                ctrlSP.show = false;
            }
        });
    }
);