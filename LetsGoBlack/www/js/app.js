// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'UserApp', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform, user) {
  // Initiate the user service with your UserApp App Id
  // https://help.userapp.io/customer/portal/articles/1322336-how-do-i-find-my-app-id-
  user.init({ appId: '57f8123f99c8b' });
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }


    document.addEventListener("deviceready", deviceReady, true);
    function deviceReady() { var plot = cordova.require("cordova/plugin/plot");
    plot.init()};


  });
})



.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // the startup route
    .state('startup', {
      url: '/startup',
      templateUrl: 'templates/startup.html',
      data: {
        login: true
      }
    })

    // the login route
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      data: {
        public: true
      }
    })

    // the signup route
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller:'AccountCtrl',
      data: {
        public: true
      }
    })

.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    // Trip setup
    .state('app.trip-setup', {
      url: '/trip-setup',
      views: {
        'menuContent': {
          templateUrl: 'templates/trip-setup.html',
          controller: 'TripCtrl'
        }
      }
    })


    // Add Business
    .state('app.add-business', {
      url: '/add-business',
      views: {
        'menuContent': {
          templateUrl: 'templates/add-business.html',
          controller: 'TripCtrl'
        }
      }
    })

    // Selected Trip
    .state('app.selected-trip', {
      url: '/selected-trip',
      views: {
        'menuContent': {
          templateUrl: 'templates/selected-trip.html',
          controller: 'TripCtrl'
        }
      }
    })

    // Selected Stop
    .state('app.selected-stop', {
      url: '/selected-stop',
      views: {
        'menuContent': {
          templateUrl: 'templates/selected-stop.html',
          controller: 'TripCtrl'
        }
      }
    })

    // Selected Stop Transaction
    .state('app.stop-transaction', {
      url: '/stop-transaction',
      views: {
        'menuContent': {
          templateUrl: 'templates/selected-trip.html',
          controller: 'TripCtrl'
        }
      }
    })

    // Account setup
    .state('app.account', {
      url: '/account',
      views: {
        'menuContent': {
          templateUrl: 'templates/account.html',
          controller: 'TripCtrl'
        }
      }
    })

    // Terms and Privacy Policy setup
    .state('app.terms-privacy', {
      url: '/terms-privacy',
      views: {
        'menuContent': {
          templateUrl: 'templates/terms-privacy.html',
          controller: 'TripCtrl'
        }
      }
    })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/trip-setup');

});



