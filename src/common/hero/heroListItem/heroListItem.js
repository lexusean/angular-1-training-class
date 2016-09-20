angular
  .module('heroListItem', [
  ])
  .directive('heroListItem', heroListItem);

function heroListItem() {
    return {
        restrict: 'E',
        scope: {
            hero: '=',
            onClickHero: '&'
        },
        controller: heroListItemController,
        templateUrl: 'heros/src/common/hero/heroListItem/heroListItem.tpl.html'
    };
}

function heroListItemController($scope) {
    console.log('in hero list item controller');
}