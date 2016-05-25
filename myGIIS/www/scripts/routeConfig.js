module.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('signin', {
                url: "/signin",
                templateUrl: "template/signin.html",
                controller: "signinController"
            })
            .state('home', {
                url: "/home",
                templateUrl: "template/home.html",
                controller: "homeController"
            })
            .state('home.dashboard', {
                url: "/dashboard",
                templateUrl: "template/dashboard.html",
                controller: "dashboardController"
            })
            .state('home.inboxParentList', {
                url: "/inboxParentList",
                templateUrl: "template/WriteToUs/inboxParentList.html",
                controller: "inboxParentListController"
            })
            .state('home.sentMailList', {
                url: "/sentMailList",
                templateUrl: "template/WriteToUs/sentMailList.html",
                controller: "sentMailListController"
            })
    .state('home.replyMail', {
        url: "/replyMail",
        templateUrl: "template/WriteToUs/replyMail.html",
        controller: "replyMailController"
    })
    .state('home.forwardMail', {
        url: "/forwardMail",
        templateUrl: "template/WriteToUs/forwardMail.html",
        controller: "forwardMailController"
    })
    .state('home.writeToTeacher', {
        url: "/writeToTeacher",
        templateUrl: "template/WriteToUs/writeToTeacher.html"
    })
    .state('home.emailStaff', {
        url: "/emailStaff",
        templateUrl: "template/WriteToUs/emailStaff.html",
        controller: "emailStaffController"
    })
    .state('home.emailAdmin', {
        url: "/emailAdmin",
        templateUrl: "template/WriteToUs/emailAdmin.html",
        controller: "emailAdminController"
    })
    .state('home.inboxChildList', {
        url: "/inboxChildList",
        templateUrl: "template/WriteToUs/inboxChildList.html",
        controller: "inboxChildListController"
    })
    .state('home.parentInboxMail', {
        url: "/parentInboxMail",
        templateUrl: "template/WriteToUs/parentInboxMail.html",
        controller: "parentInboxMailController"
    })
    .state('home.postChildsAchievement', {
        url: "/postChildsAchievement",
        templateUrl: "template/WriteToUs/postChildsAchievement.html",
        controller: "postChildsAchievementController"
    })
        .state('home.childsAchievementList', {
            url: "/childsAchievementList",
            templateUrl: "template/WriteToUs/childsAchievementList.html",
            controller: "childsAchievementListController"
        })
    .state('home.postCompliment', {
        url: "/postCompliment",
        templateUrl: "template/WriteToUs/postCompliment.html",
        controller: "postComplimentController"
    })
    .state('home.postFeedback', {
        url: "/postFeedback",
        templateUrl: "template/WriteToUs/postFeedback.html",
        controller: "postFeedbackController"
    })
    .state('home.viewProfile', {
        url: "/viewProfile",
        templateUrl: "template/profile/viewProfile.html",
        controller: "viewProfileController"
    })
    .state('home.editLoginInfo', {
        url: "/editLoginInfo",
        templateUrl: "template/profile/editLoginInfo.html",
        controller: "editLoginInfoController"
    })
    .state('home.feedback', {
        url: "/feedback",
        templateUrl: "template/profile/feedback.html",
        controller: "feedbackController"
    });
    $urlRouterProvider.otherwise("signin");
});

//signin
// /home/feedback