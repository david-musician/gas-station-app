(function() {

    angular
        .module('gasStationApp')
        .service('VehicleData', vehicleData);

    vehicleData.$inject = ['$http'];

    function vehicleData($http) {
        var getVehicleData = function() {
            return $http.get('/api/vehicleData');
        }

        /*
        var getClimbDataForWeight = function(weight) {
            return $http.get('/api/climbData/' + weight);
        }
        
        var getLandingDataForWeight = function(weight) {
            return $http.get('/api/climbData/' + weight);
        }
        */

        return {
            getVehicleData : getVehicleData,
        };
    }
})();
