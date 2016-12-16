(function() {

  angular
    .module('gasStationApp')
    .controller('pricesCtrl', pricesCtrl);

  pricesCtrl.$inject = ['$scope', `SelectedData`, 'GetGasPrices', 'uiGmapGoogleMapApi'];

  function pricesCtrl($scope, SelectedData, GetGasPrices, uiGmapGoogleMapApi) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);
    
    // vm.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    
    vm.me = "prices";
    
    vm.content = "Gas Prices";
    
    vm.selectedDepartureICAO = "";
    vm.selectedArrivalICAO = "";
    vm.selectedWeight = "";
    
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
    
    vm.getThePrices = function() {
      var lat = '34.9824649';
      var long = '-101.9175232';
      var dist = '20';
      var grade = 'mid';
      var sort = 'price';
      console.log(lat + ' ' + long + ' ' + dist + ' ' + grade + ' ' + sort);
      
      GetGasPrices.getPrices(lat, long, dist, grade, sort)
        .success(function(data) {
          vm.gasPrices = data;
          console.log(vm.gasPrices);
        })
        .error(function(e) {
          console.log(e);
        })
    }
    
    // save gas prices
    $scope.$watch(
      function(){
        return vm.selectedLocation;    
      }, 
      function (newValue, oldValue) {
        console.log(oldValue);
        console.log(newValue);
        if (newValue.loc !== oldValue.loc){
          SelectedData.selectedLocation = newValue;
        } 
      }, 
      true
    );
    
    uiGmapGoogleMapApi.then(function(maps) {
      //vm.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    });
    
    vm.getThePrices();
  }
})();