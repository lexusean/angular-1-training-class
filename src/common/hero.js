angular
  .module('hero', [])
  .factory('heroService', heroService);

function heroService() {

  var heroes = [
    {
      id: 0,
      name: 'Luke Skywalker',
      imageUrl: 'images/luke.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebel'],
      light: true
    },
    {
      id: 1,
      name: 'R2D2',
      imageUrl: 'images/r2d2.png',
      power: 2000,
      affiliations: ['Droid', 'Rebel'],
      light: true
    },
    {
      id: 2,
      name: 'Chewie',
      imageUrl: 'images/chewie.png',
      power: 6000,
      affiliations: ['Scoundrel', 'Rebel'],
      light: true
    },
    {
      id: 3,
      name: 'Darth Maul',
      imageUrl: 'images/darthMaul.png',
      power: 8000,
      affiliations: ['Sith'],
      light: false
    },
    {
      id: 4,
      name: 'Darth Vader',
      imageUrl: 'images/darthVader.png',
      power: 10000,
      affiliations: ['Sith', 'Empire'],
      light: false
    },
    {
      id: 5,
      name: 'Jango Fett',
      imageUrl: 'images/jangoFett.png',
      power: 7000,
      affiliations: ['Bounty Hunter', 'Mandalorian'],
      light: false
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
      id: 15,
      name: 'Andy',
      imageUrl: 'images/aswanson.jpeg',
      power: 40000,
      affiliations: ['Beer', 'Crown', 'Boating', 'D-Bag'],
      light: false
    },
  ];

  var service = {
    getAll: getAll
  };

  function getAll() {
    console.log('hero::heroService::getAll');
    return heroes;
  }

  return service;
}
