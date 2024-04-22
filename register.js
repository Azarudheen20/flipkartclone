//register now
$(document).ready(function(){
    //form id create
     $("#signup").validate({
       rules:{
         firstname:{
          required:true,
          minlength:3,
         },
         lastname:{
          required:true,
         },
         number:{
          required:true,
          minlength:10,
         },
         pass:{
          required:true,
          minlength:8,
         },
         ConfirmPas:{
          required:true
         }
       },
       messages:{
        firstname:{
          required:"please enter Your Name",
        },
        lastname:{
          required:"please enter Your LName",
        },
        number:{
          required:"please enter Your Number",
        },
        pass:{
          required:"please enter Password min 8 charcter",
        },
        ConfirmPas:{
          required:"Confirm Password",
        },
       }
     })
  })





     //jquery
$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    
    var input = $("#pass_log_id");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});

     //jquery
$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    
    var input = $("#pass_log_ids");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});




//conim possword

// function validate(){
//   var first=document.f1.pass.value
//   var second=document.f1.ConfirmPas.value
//   if(first==second){
//       document.write("submited")
      
//       return true
//   }
//   else if(document.getElementById("pass_log_id").value.length>8){
//       alert("8 charecters only @%^&4fghhmjgASF");
//   }
  
//   else{
//       alert("not matched")

//       return false
//   };
// };
