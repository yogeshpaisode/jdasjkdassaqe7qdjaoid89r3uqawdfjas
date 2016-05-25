
module.run(["$rootScope", "$templateCache", "$timeout", "$http", "host", "$mdSidenav", function ($rootScope, $templateCache, $timeout, $http, host, $mdSidenav) {
    //Set default headers
    $http.defaults.headers.common = host.headers;
    //Track onViewChange Event
    $rootScope.$on('$viewContentLoaded', function () {
        //TimeOut function to update Dom,Adjust View on every VIEW change
        $timeout(function () {
            $mdSidenav('left').close();
            adjustView();
            componentHandler.upgradeDom();
        }, 100);
        //Remove all template cache on every VIEW change 
        //to get updated VIEW from server
        $templateCache.removeAll();
    });

}]);