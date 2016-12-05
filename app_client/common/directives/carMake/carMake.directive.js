(function () {

  angular
    .module('gasStationApp')
    .directive('carMake', carMake);

  function carMake () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/carMake/carMake.template.html'
    };
  }
})();
