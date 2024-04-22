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
         address:{
          required:true,
          minlength:8,
         },
         pincode:{
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
        address:{
          required:"please enter Address",
        },
        pincode:{
          required:"Enter Pincode",
        },
       }
     })
  })








