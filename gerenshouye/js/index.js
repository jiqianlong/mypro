$(function () {
    /*侧导航*/
    $(".left-small").click(function () {
        $(".left").css({display:"block",width:"270px"});
        $(".right").animate({left:"275px"},200);
    })
    $(".zz").eq(0).css("display","block");
    $(".dh li").click(function () {
        var index=$(this).index();
        $(".zz").hide().eq(index).css("display","block");
    })















})