(function () {

  angular
    .module('gasStationApp')
    .directive('menu', menu);

  function menu () {
    return {
      restrict: 'EA',
      /*scope: {
        content : '=content'
      },*/
      templateUrl: '/common/directives/menu/menu.template.html'
    };
  }
})();
