
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

        $scope.deleteData = function(i){

            restService.delete({ id: $scope.test.data[i]._id }, function(result) {
                $scope.test = result.toJSON();
            });
        };

        $scope.getAllData()

        $scope.postMessage = function(){
            console.debug($scope.message);

            //$scope.message = "Sending...";
            restService.save({}, {'post': $scope.message }, function(result) {
                $scope.test = result.toJSON();
                $scope.message = "";
            });
        }

        var socket = io.connect('http://localhost');
        window.io = io;

        //socket.on('connection', function(socket){
            socket.on('chat message', function(msg){
                console.log('message: ' + msg);
            });
        //});

        var svg = d3.select("body")
            .append("svg")
            .attr("width",500)
            .attr("height",500);

        var circles = svg.selectAll('circle')
            .data([])
            .enter()
            .append("circle")


        $scope.d = [];
        socket.on('newdata', function(d){
            //console.debug(d);
            $scope.d.splice(50);
            $scope.d = [d].concat($scope.d);
            //$scope.t = d;
            //$scope.$apply()

            d3.selectAll('circle').remove();

            circles.data($scope.d)
                .enter()
                .append("circle")
                .attr("cx", function(d){return 100*(1+d.x)})
                .attr("cy", function(d){return 100*(1+d.y)})
                .attr("r", function(d,i){return -(i)*(i-50)/100})
                .attr("fill-opacity", 0.3)

        })


    });
