(function () {

  angular
    .module('gasStationApp')
    .directive('gasPrice', gasPrice);

  function gasPrice () {
    return {
      restrict: 'EA',
      scope: {
        price : '=',
      },      
      templateUrl: '/common/directives/gasPrice/gasPrice.template.html'
    };
  }
})();
