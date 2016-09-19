angular
  .module('app', [
    'hero',
    'ngRoute'
  ])
  .config(appConfig)
  .controller('AppController', AppController);

function appConfig($routeProvider) {

}

function AppController($scope, heroService) {
  $scope.title = 'Jacob\'s Crushes Page';
  
  $scope.heroes = heroService.getAll();
}