(function () {

  angular
    .module('gasStationApp')
    .directive('header', header);

  function header () {
    
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/header/header.template.html'
    };
  }
})();
