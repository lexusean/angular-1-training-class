angular
  .module('hero', [])
  .factory('heroService', heroService);

function heroService() {
  
  var heroes = [
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
      imageUrl: 'https://at-cdn-s01.audiotool.com/2015/12/05/documents/albendazol_-_tyvokka_penis/4/cover256x256-3c90efdd8173448ca464c071e39e843f.jpg',
      power: 6000,
      affiliations: ['Scoundrel', 'Rebel'],
      light: true
    },
    {
      id: 3,
      name: 'Darth Maul',
      imageUrl: 'http://icons.iconarchive.com/icons/jonathan-rey/star-wars-characters/256/Darth-Maul-02-icon.png',
      power: 8000,
      affiliations: ['Sith'],
      light: false
    },
    {
      id: 4,
      name: 'Darth Vader',
      imageUrl: 'https://cdn4.iconfinder.com/data/icons/helmet-1/154/darth-vader-mask-helmet-darkness-knight-128.png',
      power: 10000,
      affiliations: ['Sith', 'Empire'],
      light: false
    },
    {
      id: 5,
      name: 'Jango Fett',
      imageUrl: 'http://avatarbox.net/avatars/img28/jango_fett_avatar_picture_64997.jpg',
      power: 7000,
      affiliations: ['Bounty Hunter', 'Mandalorian'],
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

