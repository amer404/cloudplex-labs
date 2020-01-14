

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

function addText(topText) {
    $(`<div class='title-heading-community'>${topText}</div>`).insertBefore(".postHeader");
    $("<div class='tutorial-image'> <img src='../img/lab-large-image.png'/> </div>").insertAfter(".title-heading-community");
}

$(document).ready(function () {
    console.log('Script Included');
    addText('Hellop World');
});
$(document).ready(function () {
$.ajax({
    url: 'http://localhost:3000/cloudplex-labs/docs/doc1',
    type: 'GET',
    success: function () {
        $("<div class='container try-it-now'><div class='row text-center'><h3 class='main-try-heading'>Ready to try CloudPlex?</h3><div class='w-100 mt-3'><a class='join-btn' href=''>Try This Lab</a><div></div></div>").insertBefore(".nav-footer");
        $('.nav-footer').addClass('inner-page');
    }
});
});