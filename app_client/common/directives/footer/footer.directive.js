(function () {

  angular
    .module('gasStationApp')
    .controller('footerCtrl', footerCtrl)
    .directive('footer', footer);
    
    function footerCtrl($scope) {
      // http://stackoverflow.com/questions/22962468/angularjs-display-current-date
      $scope.date = new Date();
    }

  function footer () {
    return {
      restrict: 'EA',
      scope: {
        date: '='
      },
      templateUrl: '/common/directives/footer/footer.template.html'
    };
  }

})();