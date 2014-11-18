
angular.module('app.base')
    .controller('app.base.controller', function($scope, restService){
        $scope.test = 'test123';

        var writeObj = {};
        writeObj.data = [1,2,3];
        var obj = new restService(writeObj);

        $scope.getAllData = function(id){
            restService.query(function(result) {
                $scope.test = result.toJSON();
            });
        };

        $scope.getDataByID = function(id){
            restService.get({ 'id': id }, function(result) {
                $scope.test = result.toJSON();
            });
        };

        window.scope = $scope;
        console.debug("Hello scope ")
        $scope.postData = function(id){
            restService.save( {'post': $scope.message }, function() {
                $scope.test = result.toJSON();
            });
        };

        $scope.deleteData = function(d){
            restService.delete({ id: $scope.id }, function() {
                $scope.test = result.toJSON();
            });
        };

        $scope.getAllData()

        $scope.postMessage = function(){
            console.debug($scope.message);

            //$scope.message = "Sending...";
            restService.save({}, {'post': $scope.message }, function() {
                // $scope.test = result.toJSON();
                $scope.message = "";
            });
        }
    });
