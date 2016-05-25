(function () {
    module.controller("childsAchievementListController", ["$scope", "$state", function ($scope, $state) {
        $scope.changeState = function () {
            $state.go("home.postChildsAchievement");
        }
    }]);
}());