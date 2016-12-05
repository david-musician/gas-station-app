(function () {

  // This is referenced in app_client/common/services/airplaneData.service.html
  angular.module('gasStationApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'uiGmapgoogle-maps']);

  function config ($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    
    // console.log("TEST");
    
    // Google Maps API
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCM0VW99rb6eJ1vbq-aphBmLaE_wTjbp_g',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/vehicle/', {
        templateUrl: '/vehicle/vehicle.view.html',
        controller: 'vehicleCtrl',
        controllerAs: 'vm'
      })
      .when('/map/', {
        templateUrl: '/map/map.view.html',
        controller: 'mapCtrl',
        controllerAs: 'vm'
      })
      .when('/prices/', {
        templateUrl: '/prices/prices.view.html',
        controller: 'pricesCtrl',
        controllerAs: 'vm'
      })
      .when('/profile/', {
        templateUrl: '/profile/profile.view.html',
        controller: 'profileCtrl',
        controllerAs: 'vm'
      })
      .when('/login/', {
        templateUrl: '/login/login.view.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
      })
      .when('/about/', {
        templateUrl: '/about/about.view.html',
        controller: 'aboutCtrl',
        controllerAs: 'vm'
      })
      .when('/contact/', {
        templateUrl: '/contact/contact.view.html',
        controller: 'contactCtrl',
        controllerAs: 'vm'
      })
      .when('/signup/', {
        templateUrl: '/signup/signup.view.html',
        controller: 'signupCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('gasStationApp')
    .config(['$routeProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider', config]);

})();
