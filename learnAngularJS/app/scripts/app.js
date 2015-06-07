angular.module('app', ['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: ["$scope", function($scope) {
          $scope.title = "Home";
          $scope.items = ["item1", "item2", "item3"];
        }]
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      })
  }])