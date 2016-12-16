(function() {

    angular
        .module('gasStationApp')
        .service('GetGasPrices', getGasPrices);

    getGasPrices().$inject = ['$http'];
    
    function getGasPrices($http) {
        
        /*
        var getWeather = function(lat, lon) {

            KeyStore.getKeys()
                .success(function(data) {
                    var keys = data;
                    console.log(keys);
                    //f53f715588d39379ae80bc9bc045c885
                    var darkskykey = keys.DARK_SKY_KEY;
                    return $http.jsonp('https://api.darksky.net/forecast/' + darkskykey + '/' +
                        lat + ',' + lon + "?callback=JSON_CALLBACK", {
                            jsonpCallbackParam: 'callback'
                        });
                })
                .error(function(e) {
                    console.log(e);
                });
            };
        */
        
        var getPrices =  function(lat, long, dist, grade, sort){
            return $http.jsonp('https://devapi.mygasfeed.com/stations/radius/' + lat + '/' + long + '/' + dist + '/' + grade + '/' + sort + '/rfej9napna.json?', {
                    jsonpCallbackParam: 'callback=?'
                });
        };
        // http://devapi.mygasfeed.com/stations/radius/34.9824649/-101.9175232/20/mid/price/rfej9napna.json?callback=?
        
        /*
        var getWeather2 =  function(lat, lon){
            return $http.jsonp('https://api.darksky.net/forecast/f53f715588d39379ae80bc9bc045c885/' +
                lat + ',' + lon + "?callback=JSON_CALLBACK", {
                    jsonpCallbackParam: 'callback'
                });        
        };
        */

        return {
            //getWeather: getWeather,
            getPrices : getPrices
        };
    }

})();