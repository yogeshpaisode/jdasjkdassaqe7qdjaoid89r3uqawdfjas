(function () {
    module.controller("parentInboxMailController", ["$scope", "$mdDialog", function ($scope, $mdDialog) {
        var originatorEv;

        $scope.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };

        $scope.announceClick = function () {
            $mdDialog.show(
                    $mdDialog.alert()
                    .title('Attachment Will be Shown here!')
                    .textContent('Attachment Body..')
                    .ok('Nice')
                    .targetEvent(originatorEv)
                    );
            originatorEv = null;
        };
    }]);
}());