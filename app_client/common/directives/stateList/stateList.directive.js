(function () {

  angular
    .module('gasStationApp')
    .directive('stateList', stateList);

  function stateList () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/stateList/stateList.template.html'
    };
  }
})();
