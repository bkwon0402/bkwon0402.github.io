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

$('.d-flex-media .flex-grow-1 .title').each(function(index, value) {
    var all = $(this).map(function() {
        return this.innerHTML;
    }).get();

    if (isMobile()) {
        $(this).hide();
    }

    if (isMobile()) {
        $(".d-flex-media").children(".title-sp").html(all.join());
    }
});
