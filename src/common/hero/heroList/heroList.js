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
        templateUrl: 'heros/src/common/hero/heroList/heroList.tpl.html'
    };
}

function heroListController($scope) {
    
    $scope.factions = [
        {
            label: 'All',
            value: null
        },
        {
            label: 'Light',
            value: true
        },
        {
            label: 'Dark',
            value:  false
        }
    ];

    $scope.selectedFaction = $scope.factions[0];    

    $scope.heroFilter = function(hero) {
        if ($scope.selectedFaction.value === null) {
            // if selectedSide is null, we should show all values
            return true;
        } else {
            return hero.light === $scope.selectedFaction.value;
        }
    };
}