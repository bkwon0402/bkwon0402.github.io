function isMobile() {
    var breakpoint = 768;
    var isMobile = false;

    isMobile = updateIsMobile(breakpoint);

    window.addEventListener("DOMContentLoaded", function (event) {
        isMobile = updateIsMobile(breakpoint);
    });

    return isMobile;
}

function updateIsMobile(breakpoint) {
    return document.body.clientWidth < breakpoint;
}

$('.d-flex-media').each(function(index, value) {
    var all = $(this).children(".flex-grow-1 .title").map(function() {
        return this.innerHTML;
    }).get();

    if (isMobile()) {
        $(this).children(".flex-grow-1 .title").hide();
    }

    if (isMobile()) {
        $(this).children(".title-sp").html(all.join());
    }
});
