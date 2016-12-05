(function() {

  angular
    .module('gasStationApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedDepartureICAO : '',
          selectedArrivalICAO : '',
          selectedWeight : ''
      };
  }

})();