angular.module('app')
  .controller('HomeController', ["$scope", function($scope) {
    $scope.title = "Home";
    $scope.items = ["item1", "item2", "item3"];
  }]);