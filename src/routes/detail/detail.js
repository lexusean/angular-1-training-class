angular
  .module('detail', [
    'ngRoute',
    'hero'
  ])
  .config(detailConfig)
  .controller('DetailController', DetailController);


function detailConfig($routeProvider) {
  $routeProvider
    .when('/heros/detail/:id', {
      controller: DetailController,
      templateUrl: 'heros/src/routes/detail/detail.tpl.html'
    });
}

function DetailController($scope, $routeParams, heroService) {
  
  $scope.heroId = parseInt($routeParams.id);

  // get hero from service
  $scope.hero = heroService.get($scope.heroId);
}
