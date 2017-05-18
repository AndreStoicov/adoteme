'use strict'

angular.module('puppyCtrl', [])
    .controller('puppyController', function ($scope, Puppy) {
        $scope.formData = {}
        $scope.tagline = 'Filhotes lindos!'

        Puppy.get()
            .then(function (data) {
                $scope.puppies = data
            })
    })