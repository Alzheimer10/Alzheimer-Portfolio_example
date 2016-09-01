var RoutingApp =  angular.module('myApp', ['ui.router']);
RoutingApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('index', {
      url: "/",
      views: {
        "viewB": { template: "index.viewB" },
        "viewA": { templateUrl: "index2.html" },
        "viewC": { template: "C" }
      }
    })
    .state('route1', {
      url: "/route1",
      views: {
        "viewA": { template: "route1.viewA" },
        "viewB": { template: "route1.viewB" },
        "viewC": { template: "C" }
      }
    })
    .state('route2', {
      url: "/route2",
      views: {
        "viewA": { template: "route2.viewA" },
        "viewB": { template: "route2.viewB" },
        "viewC": { template: "C" }
      }
    })
/* $urlRouterProvider.otherwise('/');
*/
/*  $locationProvider.html5Mode(true);*/
}).controller('Ctrl1', function($scope) {
  $scope.nombre = 'Carlos Anselmi';
});