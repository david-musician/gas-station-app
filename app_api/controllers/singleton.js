/*(function() {

  angular
    .module('gasStationApp')
    .controller('singleton', singleton);

  singleton.$inject = ['$scope', `SelectedData`, 'uiGmapGoogleMapApi'];

  function singleton($scope, SelectedData, uiGmapGoogleMapApi) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
/*    var vm = this;
    console.log(window.location);
    
    // vm.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    
    vm.content = "Gas Station App";
    
    vm.selectedDepartureICAO = "";
    vm.selectedArrivalICAO = "";
    vm.selectedWeight = "";
    
    $scope.date = new Date();
    
    //check selected Departure
    if(SelectedData.selectedDepartureICAO !== null){
      vm.selectedDepartureICAO = SelectedData.selectedDepartureICAO;
    }
    
    //check selected Arrival
    if(SelectedData.selectedArrivalICAO !== null){
      vm.selectedArrivalICAO = SelectedData.selectedArrivalICAO;
    }
    
    //check selected weight
    if(SelectedData.selectedWeight !== null){
      vm.selectedWeight = SelectedData.selectedWeight;
    }
    
    uiGmapGoogleMapApi.then(function(maps) {
      //vm.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    });
  }
})();
*/
