angular
  .module('app', [
    'hero',
    'ngRoute',
    'list',
    'detail'
  ])
  .config(appConfig)
  .controller('AppController', AppController);

function appConfig($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .otherwise('/heros');
}

function AppController($scope, heroService) {
  $scope.title = 'List Page';
  
  $scope.heroes = heroService.getAll();
}