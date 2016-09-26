angular
  .module('list', [
    'ngRoute',
    'hero'
  ])
  .config(listConfig)
  .controller('ListController', ListController);

function listConfig($routeProvider) {
  $routeProvider
    .when('/heros', {
      controller: ListController,
      templateUrl: 'heros/src/routes/list/list.tpl.html'
    });
}

function ListController($scope, heroService, $location) {
  
  $scope.title = 'List Page';

  $scope.heroes = heroService.getAll();

  $scope.gotoDetail = function(hero) {
    $location.path('heros/detail/' + hero.id);
  };

}

