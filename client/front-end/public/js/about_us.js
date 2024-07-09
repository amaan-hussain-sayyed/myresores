var aboutVideoPlayer;
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
    aboutVideoPlayer = new YT.Player("about-video-player", {
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
