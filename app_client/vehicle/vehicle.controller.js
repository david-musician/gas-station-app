(function() {
    
    angular
        .module('gasStationApp')
        .controller('vehicleCtrl', vehicleCtrl);
    
    // Don't forget to inject the api values!
    vehicleCtrl.$inject = ['$scope', 'apiTest'];
    
    function vehicleCtrl($scope, apiTest) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);
        
        vm.me = "vehicle";
        
        vm.content = "Vehicle Stuff";
        
        /* Didn't have time to set it up
        vm.getVehicleData = function() {
            VehicleData.getAirports()
                .success(function(data) {
                vm.vehicles = data;
                console.log(vm.vehicles);
            })
            .error(function(e) {
                console.log(e);
            });
        }
        */
        
        vm.getWeather = function () {
            var lat = 35.8652473;
            var lng = -101.9519361;
          
            console.log('lat: ' + lat + ', ' + 'lng: ' + lng);
          
            apiTest.currentWeather(lat, lng)
                .success(function(data) {
                    vm.getWeather = data;
                    console.log(vm.getWeather);
                })
                .error(function(e) {
                    console.log(e);
                });
        };
        
        // Call services
        vm.getWeather();
    }
})();

    /*
    var apiTest = function($scope, $http){
    //https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/37.8267,-122.4233
    $http.jsonp('https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/34.9836398,-101.9306303' + "?callback=JSON_CALLBACK",
               {jsonpCallbackParam: 'callback'})
     .success(function(response){
       console.log(response);
       console.log("Function ran!");
       $scope.forecast = response.currently;

       })
       .error(function(){
         console.log("bad stuff");
       });
    };
    */
    
  /*
  var darkskyTestController = function($scope, $http){
    //https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/37.8267,-122.4233
    $http.jsonp('https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/34.9836398,-101.9306303' + "?callback=JSON_CALLBACK",
               {jsonpCallbackParam: 'callback'})
     .success(function(response){
       console.log(response);
       console.log("Function ran!")
       $scope.forecast = response.currently;

     })
     .error(function(){
       console.log("bad stuff");
     });
  };
  */

  /*angular.module('darkskytest', [])
    /*.controller('springTestController', springTestController)*
    .controller('darkskyTestController', darkskyTestController);
  */
