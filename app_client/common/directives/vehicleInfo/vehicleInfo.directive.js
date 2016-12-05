(function () {

  angular
    .module('gasStationApp')
    .directive('vehicleInfo', vehicleInfo);

  function vehicleInfo () {
    return {
      restrict: 'EA',
      scope: {
        weather : '=info',
      },      
      templateUrl: '/common/directives/vehicleInfo/vehicleInfo.template.html'
    };
  }
})();
