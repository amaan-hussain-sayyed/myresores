var windowWidth = window.outerWidth;

window.addEventListener("resize", function () {
    windowWidth = window.outerWidth;
});

$(document).ready(function () {
    // destination details carousel
    var homeBlogsCarousel = $("#destination-details-carousel .owl-carousel");
    homeBlogsCarousel.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        items: 1,
        margin: 1,
        center: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // home enquiry form - destination dropdown
    $("#enquiry_form_destination").select2({
        placeholder: "Destination",
        allowClear: true,
        width: windowWidth < 768 ? "100%" : 180,
    });

    // home enquiry form - purpose dropdown
    $("#enquiry_form_purpose").select2({
        placeholder: "Purpose",
        allowClear: true,
        width: windowWidth < 768 ? "100%" : 180,
    });
});