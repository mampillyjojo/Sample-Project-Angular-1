'use strict';

var app = angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
    }])

    .controller('View1Ctrl', [function() {

    }]);



    app.controller('customersCtrl', function($scope, $http) {
        $http.get("http://www.w3schools.com/angular/customers.php")
        .then(function (response) {$scope.names = response.data.records;});

        $scope.onListItemClickListener = function () {
            console.log('Item Clickes')
        }
    });
