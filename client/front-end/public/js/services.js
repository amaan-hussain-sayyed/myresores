var windowWidth = window.outerWidth;

window.addEventListener("resize", function () {
    windowWidth = window.outerWidth;
});

$(document).ready(function() {
    // home enquiry form - destination dropdown
    $("#enquiry_form_destination").select2({
        placeholder: "Destination",
        allowClear: false,
        width: windowWidth < 768 ? "100%" : 180,
        multiple: true,
    });

    // home enquiry form - purpose dropdown
    $("#enquiry_form_purpose").select2({
        placeholder: "Purpose",
        allowClear: true,
        width: windowWidth < 768 ? "100%" : 180,
    });
});