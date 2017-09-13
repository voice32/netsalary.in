'use strict';

// Declare app level module which depends on views, and components
angular.module('niApp', [
    'ngRoute',
    'niApp.index',
    'niApp.calc',
    'niApp.data',
    'niApp.directives'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider.caseInsensitiveMatch = true;

    $routeProvider
        .when('/', {
            templateUrl: '/views/index.html'
        })
        .when('/:country', {
            templateUrl: '/views/calc.html'
            // controller: 'CalcCtrl'
        })
        .when('/:country/:region', {
            templateUrl: '/views/calc.html'
            // controller: 'CalcCtrl'
        })
        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);

}]);
