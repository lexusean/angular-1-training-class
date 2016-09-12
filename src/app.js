angular
  .module('app', ['hero'])
  .controller('AppController', AppController);

function AppController($scope, heroService) {

  $scope.title = 'Yo Momma Page';
  
  $scope.heroes = heroService.getAll();
}