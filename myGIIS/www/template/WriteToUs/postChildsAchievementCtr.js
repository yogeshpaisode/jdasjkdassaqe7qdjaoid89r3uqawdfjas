(function () {
    module.controller("postChildsAchievementController", ["$scope","$state", function ($scope,$state) {
        $scope.child = "Select Child Reference";
        $scope.addImage = function () {
            document.getElementById("attachedFile").click();
        }
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#preView').attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        $("#attachedFile").change(function () {
            readURL(this);
        });

        $scope.achievementsLists = function () {
            $state.go("home.childsAchievementList")
        }

    }]);
}());