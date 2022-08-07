function isMobile() {
    var breakpoint = 768;
    var isMobile = false;

    isMobile = updateIsMobile(breakpoint);

    window.addEventListener("DOMContentLoaded", function (event) {
        isMobile = updateIsMobile(breakpoint);
    });

    return isMobile;
}

$('.d-flex-media .flex-grow-1 .title').each(function (index, value) {
    if (isMobile()) {
        $(this).hide();
    }

    var all = $(this).map(function() {
        return this.innerHTML;
    }).get();

    $(".title-sp").html(all.join());
});
