'use strict';


// Declare app level module which depends on filters, and services
angular.module('app', [
    'ngResource',
    'ui.bootstrap',
    'ui.router',

    'app.services',
    'app.services.restapi',
    'app.base'
])
    .run(
        [ '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {

                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications. For example,
                // <li ui-sref-active="active }"> will set the <li> // to active whenever
                // 'contacts.list' or one of its decendents is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                // FIXME https://github.com/angular-ui/ui-router/issues/92 - when the history service is implemented this should go
                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                    $state.previous = {
                        name: fromState.name,
                        params: fromParams
                    };
                });
            }
        ]
    )
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/features/homeview.html');
    }])