(function () {
    module.controller("homeController", ["$mdSidenav", "$scope", "$timeout", "$cordovaStatusbar", function ($mdSidenav, $scope, $timeout, $cordovaStatusbar) {
        //Function to init data
        $scope.init = function () {
            $timeout(function () {
                adjustView();
                $cordovaStatusbar.styleHex('#273AA2');
            }, 100);
        }
        //JQuery window resize event
        $(window).resize(function () {
            adjustView();
        });
        //Function to Open Left Sidemenu
        $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
            $scope.init();
        }
    }]);
}())