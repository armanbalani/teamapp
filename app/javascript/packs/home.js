$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var viewHeight = window.innerHeight
        var nav = $(".navbar")
        console.log(nav)
        if (scroll >= viewHeight) {
            nav.css("background", "rgba(0, 0, 0, 0.3)")
        }
        else {
            nav.css("background", "none")
        }
    })
})