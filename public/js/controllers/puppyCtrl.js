'use strict'

angular.module('puppyCtrl', [])
    .controller('puppyController', function ($scope, Puppy,uiGridConstants) {
        $scope.formData = {}
        $scope.tagline = 'Filhotes lindos!'

        Puppy.get()
            .then(function (data) {
                $scope.puppies = data.data
                $scope.columns = [{ field: 'name' }, { field: 'gender' }];
                $scope.gridOptions = {
                    enableSorting: true,
                    onRegisterApi: function (gridApi) {
                        $scope.gridApi = gridApi;
                    },
                    data: data.data
                }                
            })
    })