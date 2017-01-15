'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginController'
  });
}])

//.controller('loginController', [function($scope) {
//    $scope.onLoginButtonClickListener = function(){
//        console.log('login clicked');
//    }
//}]);

.controller('loginController', ['$scope','$state', function($scope,$state) {
   // $scope.count = 0;
    $scope.onLoginButtonClickListener = function() {
        console.log('login clicked');
        $state.go("view1")
    };
}]);
