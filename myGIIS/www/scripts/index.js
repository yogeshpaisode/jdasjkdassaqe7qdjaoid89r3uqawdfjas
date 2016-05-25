$(document).ready(function () {
    $("body").click(function () {
        $("input,textarea").blur();                     //Handle keyboard control
    });
    $("#get").click(function () {
        alert("ok");
    });
}); 
//Function to adjust screen for different viewport 
var adjustView = function () {
    var body = $("body").height();
    if (body >= 1024) {
        $("#bottomMenuIcons").css({ "margin-top": 240 });
    } else {
        $("#bottomMenuIcons").css({ "margin-top": 20 });
    }
    var mdToolbar = $("md-toolbar").height();
    var windowHeight = $(window).height();
    var menuHeight = (windowHeight - mdToolbar);
    //add margin to main ui-view
    $("#bodyView").css({ "margin-top": (mdToolbar + 4) });
    //add top to panel view
    $("md-sidenav,md-backdrop").css({ "top": mdToolbar });
    //Handle left menu icons
    $(".panel_LeftMenuIcon,.panelItem").css({ "height": menuHeight });
}