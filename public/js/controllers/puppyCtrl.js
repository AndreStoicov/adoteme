'use strict'

angular.module('puppyCtrl', [])
    .controller('puppyController', function ($scope, Puppy) {
        $scope.formData = {}
        $scope.tagline = 'Uma coisa mais fofa que a outra!'

        Puppy.get()
            .then(function (data) {
                $scope.puppies = data
            })
    })