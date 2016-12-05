(function() {
    
    angular
        .module('gasStationApp')
        .service('apiTest', apiTestSvc);
    
    apiTestSvc.$inject = ['$http'];
    
    function apiTestSvc($http) {
        /*var getWeather = function(lat, lng) {
            
            Vehicle.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    var darkskykey = keys.DARK_SKY_KEY;
                    return $http.jsonnp('https://api.darksky.net/forecast/'
                        + darkskykey + '/' + lat + ',' + lng
                        + "?callback=JSON_CALLBACK", {
                            jsonCallbackParam: 'callback'
                        });
                })
                .error(function(e) {
                    console.log(e);
                })
        };*/
        
        var currentWeather = function(lat, lng) {
            return $http.jsonp('https://api.darksky.net/forecast/6c8b305547beae413df14241f389aea7/'
                + lat + ',' + lng + "?callback=JSON_CALLBACK", {
                    jsonCallbackParam: 'callback'
                });
        }
        
        return {
            //getWeather: getWeather,
            currentWeather : currentWeather
        };
    }

})();
