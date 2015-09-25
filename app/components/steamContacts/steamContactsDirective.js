angular.module('Steamify').directive('steamContacts',
    function () {
        return {
            restrict: "E",
            bindToController: {},
            controller: "SteamContactsController",
            controllerAs: "steamContacts",
            templateUrl: "app/components/steamContacts/steamContacts.html",
            scope: true
        };
    }
);