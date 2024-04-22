$("a[href='#top']").click(function(){
    $("html,body").animate({scrollTop:0},3000)
    return false;
});