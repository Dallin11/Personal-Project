"use strict";

angular.module("app", ["ui.router"]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state("login", {
        url: "/login",
        templateUrl: "./app/views/login.html",
        controller: "loginCtrl"
    }).state("calendar", {
        url: "/calendar",
        templateUrl: "./app/views/calendar.html",
        controller: "calendarCtrl"
    }).state("newEvent", {
        url: "/newEvent",
        templateUrl: "./app/views/newEvent.html",
        controller: "newEventController"
    });
});
"use strict";
"use strict";
"use strict";

angular.module("app").controller("mainCtrl", function ($scope, mainSvc) {
    // $scope.test = mainSvc.test
});
"use strict";
"use strict";

angular.module("app").service("mainSvc", function ($http) {
    // this.test = "Service working"


});