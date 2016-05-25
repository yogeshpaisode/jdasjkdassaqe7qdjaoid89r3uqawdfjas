(function () {
    module.controller("signinController", ["$scope", "$state", "$timeout", "CAMPUS", "settingVal", "toastService", function ($scope, $state, $timeout, CAMPUS, settingVal, toastService) {
        $scope.response_CampusList = [];                        //Response Campus List
        $scope.campusesList = [];                               //Campuses List according to Organization
        $scope.activeOrganization = "";                         //Default active organization
        var home = 'home.dashboard';                            //Home Path
        //Function to hide Progress Circular Loader and 
        //To fetch Campuses List
        $scope.initCampuses = function () {
            hideProgress();
            CAMPUS.query(function (response) {
                var organizationIndex = settingVal.defaultOrganization;
                $scope.response_CampusList = response;
                $scope.activeOrganization = $scope.response_CampusList[organizationIndex]["name"];
                $scope.loadCampuses(organizationIndex);
                console.log("Success Fetching Campuses " + angular.toJson(response));
            }, function (response) {
                toastService.showToast("Error Fetching Campuses List..");
            });
        }
        //Function To Begin Log In
        $scope.doLogin = function () {
            showProgress();
        }
        //Function to Show Circular Progress Bar while
        //login process is in Progress
        function showProgress() {
            $("#signInButtonText").hide();
            $(".mdl-spinner").show();
            $timeout(function () {
                settingVal.signinSuccess = true;
                //Go to Dashboard and Delete all History to prevent back 
                //by Setting location:"replace"
                $state.go(home, {}, { location: "replace", reload: false });
            }, 3000);
        }
        //Function to hide Circular progress bar 
        //and to load Status
        function hideProgress() {
            $("#signInButtonText").show();
            $(".mdl-spinner").hide();
        }
        //Function to remove unnecessary focus from
        //Input type="text" to hide keyboard
        $scope.removeFocus = function () {
            $(".login_input").blur();
        }
        //function to Load Campuses on Oraganization basis
        $scope.loadCampuses = function (organizationListIndex) {
            $scope.campusesList = [];
            $scope.campusesList = $scope.response_CampusList[organizationListIndex].campuses;
        }
    }]);
}());

