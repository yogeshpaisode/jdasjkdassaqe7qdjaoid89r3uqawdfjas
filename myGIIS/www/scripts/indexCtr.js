(function () {
    module.controller("indexController", ["$scope", "$mdSidenav", "settingVal", "$state", "$timeout", "$cordovaDevice", function ($scope, $mdSidenav, settingVal, $state, $timeout, $cordovaDevice) {
        var pre = "template/panelItem/";
        var post = ".html";
        $scope.panelClass = "";
        $scope.activePanelItem = pre + settingVal.initPanelActiveItem + post;
        //Document Ready Event
        document.addEventListener("deviceready", function () {
            cordova.exec(function (winParam) { alert("Success : " + angular.toJson(winParam)); },
              function (error) { alert("Error : " + error); },
              "SecureValues",
              "action",
              []);
        }, false);
        //Function to init data
        $scope.init = function () {
            $timeout(function () {
                adjustView();
                if ($cordovaDevice.getPlatform().toLowerCase() == "android") {
                    $scope.panelClass = "fade-in";
                }
            }, 100);
        }
        //Function to handle Right Swipe Event
        $scope.onSwipeRight = function (ev) {
            if (settingVal.signinSuccess) {
                $mdSidenav('left').toggle();
                $scope.init();
            }
        }
        //Function to handle Left Swipe Event
        $scope.onSwipeLeft = function (ev) {
            if (settingVal.signinSuccess) {
                $mdSidenav('left').close();
                $scope.init();
            }
        }
        //Function to change Panel Active Item
        $scope.changePanelActiveItem = function (itemName) {
            console.log("Active Item Name: " + itemName);
            $scope.activePanelItem = pre + itemName + post;
        }
        //Function to Change State
        $scope.changeState = function (state) {
            $mdSidenav('left').close();
            $state.go(state);
        }
    }]);
}());


