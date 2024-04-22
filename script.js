       //jquery
$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    
    var input = $("#pass_log_id");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});


//login form
$(document).ready(function(){
  $("#signup").validate({
    rules:{
      email:{
        required:true,
      },
      pass:{
        required:true,
        minlength:15,
      }
    },
    messages:{
      email:{
        required:"please enter Your email",
      },
      pass:{
        required:"please enter Password min 15 charcter only",
      },
      
     }
    //end
  })
})





