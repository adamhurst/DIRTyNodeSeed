'use strict';

angular.module('app.services.restapi',[])
    .factory('restService', function($resource) {
        return $resource('/api/template/:message',
                {},
                {
                    'get'  : {method: "GET"},
                    'query': {method: 'GET', isArray: false},
                    'update': {method : "POST"},
                    'save': {method: "POST"},
                    'delete': {method:'DELETE'}
                }
            );
    });
        /*
    .service('restService', function($resource){
        this.test =


         ,{},
         {
         getData: {
         method:'GET',
         isArray: false
         },
         postData: {
         method: 'POST'
         }
         }





        //  /:id', {userId:'@id'});


        var user = User.get({userId:123}, function() {
            user.abc = true;
            user.$save();
        });


        this.test = function(){
            return testResource.getData();
        }
         */

