angular
  .module('heroDetail', [
  ])
  .directive('heroDetail', heroDetail);

function heroDetail() {
    return {
        restrict: 'E',
        scope: {
            hero: '=',
            onClose: '&'
        },
        controller: heroDetailController,
        templateUrl: 'heros/src/common/hero/heroDetail/heroDetail.tpl.html'
    };
}

function heroDetailController($scope) {

}