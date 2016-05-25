(function () {
    module.controller("inboxChildListController", ["$scope", "CHILDList", "settingVal", "$window", "$interval", function ($scope, CHILDList, settingVal, $window, $interval) {
        settingVal.listPageSize = 0;                                                //Reset default page size to 0 
        $scope.inboxMailList = [];                                                  //Response Inbox Mail List
        $scope.fetchingIsInProgress = true;                                         //Flag
        $scope.gotIssue = false;                                                    //Flag to show Problem Message
        $scope.timeOut = settingVal.maxRetryingSec;                                 //Maximum Retrying timeOut value
        $scope.showTimeOutCount = settingVal.maxRetryingSec;                        //Count down formater
        //Scroll Handler for SCROLL BOTTOM REACH
        angular.element($window).bind("scroll", function () {
            var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            var body = document.body, html = document.documentElement;
            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight) {
                $scope.fetchMailList();
            }
        });//End
        //Function to fetch list
        $scope.fetchMailList = function () {
            $scope.fetchingIsInProgress = true;
            $scope.gotIssue = false;
            settingVal.listPageSize++;
            console.log(settingVal.listPageSize);
            CHILDList.query(function (response) {
                $scope.inboxMailList = $scope.inboxMailList.concat(response);
                $scope.fetchingIsInProgress = false;
                console.log("Success Fetching Inbox Mail List " + angular.toJson(response));
            }, function (response) {
                $scope.fetchingIsInProgress = false;
                $scope.gotIssue = true;
                retrying();
                console.log("Error Fetching Inbox Mail List " + angular.toJson(response));
            });
        }
        //Function to Retry Fetching
        var retrying = function () {
            var inter = $interval(function () {
                $scope.timeOut--;
                if ($scope.timeOut < 10) {
                    $scope.showTimeOutCount = "0" + $scope.timeOut;
                } else {
                    $scope.showTimeOutCount = $scope.timeOut;
                }

                if ($scope.timeOut == 0) {
                    $interval.cancel(inter);
                    $scope.timeOut = settingVal.maxRetryingSec;
                    $scope.showTimeOutCount = settingVal.maxRetryingSec+"";
                    $scope.fetchMailList();
                }
            }, 1000);
        }

    }]);
}());