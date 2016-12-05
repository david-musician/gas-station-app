(function() {

  angular
    .module('gasStationApp')
    .controller('mapCtrl', mapCtrl)
    .config(function(uiGmapGoogleMapApiProvider){
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCM0VW99rb6eJ1vbq-aphBmLaE_wTjbp_g',
        v: '3.20',
        libraries: 'weather, geometry, visualization'
      });
    })

  // check for Geolocation support
  if (navigator.geolocation) {
    console.log('Geolocation is supported!');
  }
  else {
    console.log('Geolocation is not supported for this Browser/OS.');
  }

  // Begin getting the user's location
  var x = document.getElementById("demo");
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }
  
  function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
  }
  // End getting user's location

  mapCtrl.$inject = ['$scope', `SelectedData`, 'uiGmapGoogleMapApi'];

  function mapCtrl($scope, SelectedData, uiGmapGoogleMapApi) {
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    var vm = this;
    console.log(window.location);
    
    $scope.say = location.say;
    
    vm.map = {
      center: {
        latitude: 34.9824649,
        longitude: -101.9175232
      },
      zoom: 14,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      }
    };
    
    vm.me = "map";
    
    vm.content = "Map!";
    
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
    
    uiGmapGoogleMapApi.then(function(maps) {
      //vm.map = { center: { latitude: -34.397, longitude: 150.644 }, zoom: 8 };
    });
  }
})();