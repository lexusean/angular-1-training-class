angular
  .module('app', [])
  .controller('AppController', AppController);

function AppController($scope) {

  $scope.title = 'Yo Momma Page';
  
  $scope.heroes = [
    {
      id: 0,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebels'],
      light: true
    },
  ]
}