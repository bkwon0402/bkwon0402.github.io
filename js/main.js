function isMobile() {
    var breakpoint = 768;
    var isMobile = false;

    isMobile = updateIsMobile(breakpoint);

    window.addEventListener("DOMContentLoaded", function (event) {
        isMobile = updateIsMobile(breakpoint);
    });

    return isMobile;
}

$('.d-flex-media .title').each(function (index, value) {
    var all = $(this).map(function() {
        return this.innerHTML;
    }).get();

    $(".title-sp").html(all.join());
});
