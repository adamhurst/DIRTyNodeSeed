'use strict';

angular.module('app.services.restapi',[])
    .service('restService', function($resource){
        var testResource = $resource('/api/test',{}, {getData: {method:'GET', isArray: false}});
        //  /:id', {userId:'@id'});

        /*
        var user = User.get({userId:123}, function() {
            user.abc = true;
            user.$save();
        });
        */

        this.test = function(){
            return testResource.getData();
        }
})
