angular.module('app')
  .controller('HomeController', ["$scope", "Friends", function($scope, Friends) {
    $scope.title = "Home";
    Friends.get().then(function(data) {
      $scope.friends = data;
    });
    $scope.items = ["home", "about", "contact"];
    $scope.selectedValue = "home";
  }]);