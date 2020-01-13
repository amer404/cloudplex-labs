

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".fixedHeaderContainer").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".fixedHeaderContainer").removeClass("active");
        }
    });
});
$(document).ready(function(){

  });
$(document).ready(function(){
    $( "<div class='title-heading-community'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>" ).insertBefore( ".postHeader" );
    $( "<div class='tutorial-image'> <img src='../img/lab-large-image.png'/> </div>" ).insertAfter( ".title-heading-community" );
  });

