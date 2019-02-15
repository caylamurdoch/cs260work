var firstApp = angular.module('firstApp', []);
firstApp.controller('FirstController', function($scope) {
    $scope.first = 'Some';
    $scope.last = 'One';
    $scope.heading = 'Message: ';
    $scope.names = [];
    $scope.updateMessage = function() {
        $scope.message = 'Hello ' + $scope.first.toUpperCase() + ' ' + $scope.last + '!';
        console.log($scope.message);
        let newName = { first: $scope.first, last: $scope.last };
        $scope.names.push(newName);
        console.log($scope.names);
    };
});
