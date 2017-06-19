angular.module("app", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "./app/views/home.html",
            controller: "homeCtrl"
        })
        .state("calendar", {
            url: "/calendar",
            templateUrl: "./app/views/calendar.html",
            controller: "calendarCtrl"
        })
        .state("newEvent", {
            url: "/newEvent",
            templateUrl: "./app/views/newEvent.html",
            controller: "newEventController"
        })
        .state("login", {
            url: "/login",
            templateUrl:"./app/views/login.html",
            controller: "loginCtrl"
        })


});