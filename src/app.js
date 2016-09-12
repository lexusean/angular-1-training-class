angular
  .module('app', [])
  .controller('AppController', AppController);

function AppController($scope) {

  $scope.title = 'Yo Momma Page';
  
  $scope.heroes = [
    {
      id: 0,
      name: 'Luke Skywalker',
      imageUrl: 'http://icons.veryicon.com/png/Movie%20%26%20TV/Star%20Wars%20Characters/Luke%20Skywalker%2001.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebel'],
      light: true
    },
    {
      id: 14,
      name: 'Captain Rex',
      imageUrl: 'http://www.sideshowtoy.com/wp-content/uploads/2014/02/100222-product-silo3.png',
      power: 2000,
      affiliations: ['Clone Trooper', 'New Republic'],
      light: true
    },
    {
      id: 1,
      name: 'R2D2',
      imageUrl: 'http://icons.iconarchive.com/icons/artua/star-wars/256/R2D2-icon.png',
      power: 2000,
      affiliations: ['Droid', 'Rebel'],
      light: true
    },
    {
      id: 2,
      name: 'Chewie',
      imageUrl: 'heros/images/chewie.png',
      power: 6000,
      affiliations: ['Scoundrel', 'Rebel'],
      light: true
    },
    {
      id: 3,
      name: 'Darth Maul',
      imageUrl: 'heros/images/darthMaul.png',
      power: 8000,
      affiliations: ['Sith'],
      light: false
    },
    {
      id: 4,
      name: 'Darth Vader',
      imageUrl: 'heros/images/darthVader.png',
      power: 10000,
      affiliations: ['Sith', 'Empire'],
      light: false
    },
    {
      id: 5,
      name: 'Jango Fett',
      imageUrl: 'heros/images/jangoFett.png',
      power: 7000,
      affiliations: ['Bounty Hunter', 'Mandalorian'],
      light: false
    },
  ]
}