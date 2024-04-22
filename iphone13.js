$(".accept").click(function(){
    if($("#submitbtn").is(":disabled")){
      $("#submitbtn").removeAttr("disabled")
      $("#submitbtn").css({"opacity":0.9})

    }
    else{
        $("#submitbtn").attr("disabled","disabled");
        $("#submitbtn").css({"opacity":0.3})
    }
})





$(".acce").click(function(){
    if($("#sumitbtn").is(":disabled")){
      $("#sumitbtn").removeAttr("disabled")
      $("#sumitbtn").css({"opacity":0.9})

    }
    else{
        $("#sumitbtn").attr("disabled","disabled");
        $("#sumitbtn").css({"opacity":0.3})
    }
})
