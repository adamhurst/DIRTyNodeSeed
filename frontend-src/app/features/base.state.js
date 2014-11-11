'use strict';

angular.module('app.base', [
    'ui.router',
    'app.services'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('base', {
                //abstract: true,
                url: '/features',
                views: {
                    '@': {
                        templateUrl: 'features/homeview.html',
                        controller: 'app.base.controller'
                    }
                }
            })
    }]);