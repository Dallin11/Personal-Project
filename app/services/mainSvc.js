angular.module("app").service("mainSvc", function($http){
    // this.test = "Service working"
this.getauth0 = function(){
    return $http({
        method: "GET",
        url: "/auth"
    })
}
    
})