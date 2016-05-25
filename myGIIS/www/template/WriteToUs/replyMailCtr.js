(function () {
    module.controller("replyMailController", ["$scope", function ($scope) {
        $scope.openFile = function () {
            document.getElementById("replyAttachedFile").click();
        }
    }]);
}())