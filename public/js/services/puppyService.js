'use strict'

angular.module('puppyService', []).factory('Puppy', ['$http', function ($http) {

    return {
        
        get: function() {
            return $http.get('/api/puppy')
        },
        
        create: function(puppyData) {
            return $http.post('/api/puppy', puppyData)
        },

        delete: function(id) {
            return $http.delete('/api/puppy/' + id)
        }
    }

}])