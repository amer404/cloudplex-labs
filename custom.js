

$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".fixedHeaderContainer").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".fixedHeaderContainer").removeClass("active");
        }
    });
});

function addTitleText(topText) {
    $(`<div class='title-heading-community'>${topText}</div>`).insertBefore(".postHeader");
    $("<div class='tutorial-image'> <img src='../img/lab-large-image.png'/> </div>").insertAfter(".title-heading-community");
}

$(document).ready(function () {
    console.log('Script Included');
    addTitleText('Hellop World');
});

$(document).ready(function () {
    var url = window.location.href;
    if(url.includes('/docs') === true) {
        $("<div class='container try-it-now'><div class='row text-center'><h3 class='main-try-heading'>Ready to try CloudPlex?</h3><div class='w-100 mt-3 mb-3'><a class='join-btn' href=''>Try This Lab</a><div></div></div>").insertBefore(".nav-footer");
        $('.nav-footer').addClass('inner-page');
    }
});

$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#cartoonVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });
});

$(document).ready(function() {

    $(".owl-carousel").owlCarousel({
    
    autoPlay: 3000,
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3],
    center: true,
    nav:true,
    loop:true,
    responsive: {
    600: {
    items: 4
    }
    }
    });
    
    });