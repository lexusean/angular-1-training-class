angular
  .module('heroList', [
  ])
  .directive('heroList', heroList);

function heroList() {
    return {
        restrict: 'E',
        scope: {
            heroes: '=',
            onClickHero: '&'
        },
        controller: heroListController,
        controllerAs: 'heroes',
        templateUrl: 'src/common/hero/heroList/heroList.tpl.html'
    };
}

function heroListController($scope) {
    
}