var windowWidth = window.outerWidth;

window.addEventListener("resize", function () {
    windowWidth = window.outerWidth;
});

// home destination carousel
var homeDestinationCarousel = $("#home-destinations .owl-carousel");
var lastScrollTop = 0;
var scrolling = false;

function navigateDestinationCarousel(e) {
    e.preventDefault();
    const isScrollingDown = Math.sign(e.wheelDeltaY);

    if (!scrolling) {
        scrolling = true;
        if (isScrollingDown >= 0) {
            homeDestinationCarousel.trigger('prev.owl');
            this.setTimeout(() => {
                scrolling = false;
            }, 1000);
        } else {
            homeDestinationCarousel.trigger('next.owl');
            this.setTimeout(() => {
                scrolling = false;
            }, 1000);
        }
    }
}

function checkAndAddDestinationCarouselNavigation(e) {
    this.setTimeout(() => {
        if ($(this).scrollTop() === 0) {
            window.addEventListener("wheel", navigateDestinationCarousel, { passive: false })
            window.removeEventListener("scroll", checkAndAddDestinationCarouselNavigation);
        }
    }, 500);
}

$(document).ready(function () {
    homeDestinationCarousel.owlCarousel({
        loop: false,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
        },
    });
    // attach scroll handling for carousel navigation
    if ($(window).scrollTop() <= 10) {
        window.addEventListener("wheel", navigateDestinationCarousel, { passive: false })
        window.removeEventListener("scroll", checkAndAddDestinationCarouselNavigation);
    }
    // remove scroll handling if last slide reached
    homeDestinationCarousel.on('changed.owl.carousel', function(e) {
        if ((e.page.index + e.page.size) >= e.page.count) {
            window.removeEventListener("wheel", navigateDestinationCarousel);
            window.addEventListener("scroll", checkAndAddDestinationCarouselNavigation);
        }
    });

    // home skip to main content
    $("#skip-to-main-content").on("click", function () {
        $("html, body").animate(
            {
                scrollTop: $("header").offset().top,
            },
            100
        );
        window.removeEventListener("wheel", navigateDestinationCarousel);
        window.addEventListener("scroll", checkAndAddDestinationCarouselNavigation);
    });

    // home search destination custom
    $("input", ".custom-search-wrapper").on("input", function(e) {
        if (!e.target.value) {
            $(".custom-search-result-wrapper").removeClass("custom-search-result-wrapper-show");
            return;
        }
        $(".custom-search-result-wrapper").addClass("custom-search-result-wrapper-show");
    });

    // home search destination
    // $("#search_destination").select2({
    //     placeholder: "Search for...",
    //     allowClear: false,
    //     width: "100%",
    //     dropdownParent: $(".hero-searchbox"),
    // });

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

    // home blogs carousel
    var homeBlogsCarousel = $("#home-blogs .owl-carousel");
    homeBlogsCarousel.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        center: windowWidth < 768 ? false : true,
        items: 1,
        margin: 10,
        responsive: {
            0: {
                items: windowWidth < 768 ? 1 : 3,
            },
        },
    });

    // happy clients carousel
    var homeHappyClientsCarousel = $("#home-happy-clients .owl-carousel");
    homeHappyClientsCarousel.owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
        },
    });
    $("#happy-clients-carousel-left").on("click", function () {
        homeHappyClientsCarousel.trigger("prev.owl.carousel");
    });
    $("#happy-clients-carousel-right").on("click", function () {
        homeHappyClientsCarousel.trigger("next.owl.carousel");
    });
    homeHappyClientsCarousel.on("changed.owl.carousel", function (event) {
        var slideNumber = event.item.index || 0;
        var totalSlides = event.item.count;
        $(".slide-number").text(
            slideNumber + 1 < 10 ? `0${slideNumber + 1}` : slideNumber
        );
        $(".total-slides").text(
            totalSlides < 10 ? `0${totalSlides}` : totalSlides
        );
    });
});

// home video player
// note: params link https://developers.google.com/youtube/player_parameters
var homeVideoPlayer;
var homeDestinationVideoPlayer;
var videPlayerConfig = {
    playsinline: 1,
    autoplay: 0,
    cc_load_policy: 0,
    controls: 0,
    disablekb: 1,
    fs: 0,
    iv_load_policy: 3,
    loop: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    ecver: 2,
}
function onYouTubeIframeAPIReady() {
    homeVideoPlayer = new YT.Player("home-video-player", {
        videoId: "yr6V_x3nGFM",
        width: '100%',
        height: '100%',
        playerVars: videPlayerConfig,
        events: {
            onReady: function (event) {
                event.target.setVolume(0);
                event.target.playVideo();
            },
        },
    });

    homeDestinationVideoPlayer = new YT.Player("destination-video-player", {
        videoId: "yr6V_x3nGFM",
        width: '100%',
        height: '100%',
        playerVars: videPlayerConfig,
        events: {
            onReady: function (event) {
                event.target.setVolume(0);
                event.target.playVideo();
            },
        },
    })
}
