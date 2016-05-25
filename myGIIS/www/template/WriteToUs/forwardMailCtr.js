(function () {
    module.controller("forwardMailController", ["$scope", function ($scope) {
        $scope.openFile = function () {
            document.getElementById("forwardAttachedFile").click();
        }
    }]);
}())