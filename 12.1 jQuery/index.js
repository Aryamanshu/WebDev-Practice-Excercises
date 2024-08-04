//$(document).ready(function () {
  // to check that document is ready or not then execute the other line of jquery code.
     
  
  //$("h1").css("color", "green");

      //});

 $("h1").addClass("big-title margin-50"); // to add class in existing code
     //$("h1").text("bye");

    // $("button").html("<b>nahidungi</b>");

    
    for(var i=0; i<5; i++) {
        document.querySelectorAll("button")[i].addEventListener("click", function() {
            document.querySelector("h1").style.color = "purple";
        }
        );}

       // usning simple javascript
       
       
       
       
       $("button").click(function() {
        $("h1").slideUp().slideDown().animate({opacity: 0.5})
       });

     // using jquery


     $(document).keypress(function(event) {
        $("h1").text(event.key);
     });

     

     $("h1").on("mouseover", function() {
        $("h1").css("color", "red")
     }); 
     // if we use this statement and then we placed our mouse on h1 tag then its will change its color
     //as "mouseover" is one of the many events listed in mdn DOM events reference blocks on web. 