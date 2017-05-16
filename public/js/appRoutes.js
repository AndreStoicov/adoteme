'use strict'

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
    ($routeProvider, $locationProvider) => {
        $routeProvider
            // home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'mainController'
            })
            // nerds page that will use the NerdController
            .when('/puppy', {
                templateUrl: 'views/puppy.html',
                controller: 'puppyController'
            })

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        })
    }])
