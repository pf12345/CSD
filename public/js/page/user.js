$(function() {
    var navList = $(".user_setProfile").find("ul").find("li");
    $(".change_content").css("min-height", $(window).height() - 140 +"px");
    navList.each(function() {
        $(this).click(function() {
            navList.removeClass("current");
            $(this).addClass("current");
            $(".change_content > div").hide();
            var currentClass = $(this).attr("data-class");
            $("."+currentClass).show();
        });
    });
});
