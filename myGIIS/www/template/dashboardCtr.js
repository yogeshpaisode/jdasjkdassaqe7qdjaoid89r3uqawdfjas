(function () {
    module.controller("dashboardController", ["$scope", "$mdSidenav", function ($scope, $mdSidenav) {
        $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
        }
    }]);
}())