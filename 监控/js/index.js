$(function () {
    $(".monitor_selector").on("click", "a", function () {
        console.log($(this).index());
        $(this).addClass("active").siblings().removeClass("active");
        $(".monitor_content").eq($(this).index()).show().siblings(".monitor_content").hide();
    });
    $(".monitor_content").on("click", function () {
        console.log($(this).index());
    });
    $(".monitor_content_bd ul").each(function () {
        var li = $(this).children().clone();
        $(this).append(li);
    });
})