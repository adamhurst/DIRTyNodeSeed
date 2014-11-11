
angular.module('app.base')
    .controller('app.base.controller', function($scope, restService){
        $scope.test = 'test123';

        restService.test().$promise.then(function (result) {
            $scope.test = result.toJSON();
            window._t = result.toJSON();
        });
    })
