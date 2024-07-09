const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const htmlTooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip-html"]'
);
const htmlTooltipList = [...htmlTooltipTriggerList].map(
    (tooltipTriggerEl) =>
        new bootstrap.Tooltip(tooltipTriggerEl, {
            html: true,
            animated: "fade",
        })
);

window.addEventListener("scroll", function () {
    // alert("called");
    this.setTimeout(function () {
        if ($(this).scrollTop() < 320) {
            $(".back-to-top").removeClass("active");
        } else {
            $(".back-to-top").addClass("active");
        }
    }, 300);
});

$(document).ready(function () {
    $(".back-to-top").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            100
        );
    });
});
