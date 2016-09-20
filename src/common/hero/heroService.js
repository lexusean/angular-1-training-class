angular
  .module('heroService', [])
  .factory('heroService', heroService);

function heroService() {

  var heroes = [
    {
      id: 0,
      name: 'Luke Skywalker',
      imageUrl: 'heros/images/luke.png',
      power: 9000,
      affiliations: ['Jedi', 'Rebel'],
      light: true
    },
    {
      id: 1,
      name: 'R2D2',
      imageUrl: 'heros/images/r2d2.png',
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
      imageUrl: 'heros/images/aswanson.jpeg',
      power: 40000,
      affiliations: ['Beer', 'Crown', 'Boating', 'D-Bag'],
      light: false
    },
  ];

  var service = {
    getAll: getAll,
    get: get
  };

  function getAll() {
    console.log('hero::heroService::getAll');
    return heroes;
  }

  function get(heroId) {
    var h = heroes.filter(function(hero) {
      return hero.id === heroId;
    });

    return h[0];
  }

  return service;
}
