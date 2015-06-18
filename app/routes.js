/**
 * Created by Sébastien on 18/05/2014.
 */
angular.module('Steamify').config(function ($routeProvider, $locationProvider) {


    $routeProvider.when('/', {
        templateUrl: 'app/views/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
    })
        .when('/mobile', {
            templateUrl: 'app/views/mobile/mobile.html',
            controller: 'MobileController',
            controllerAs: 'mobile'
        });

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo: '/'});

});
