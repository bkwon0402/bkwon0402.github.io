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
    var all = $(this).find(".flex-grow-1 .title").map(function() {
        return this.innerHTML;
    }).get();

    if (isMobile()) {
        $(this).find(".flex-grow-1 .title").hide();
    }

    if (isMobile()) {
        $(this).find(".title-sp").html(all.join());
    }
});




$("body").hide();

var password = "please";
var x = prompt("Enter in the password "," ");
if (x.toLowerCase() == password) {
    alert("Come right in \n \n You've entered in the right password");
    $("body").show();
}
else {
    prompt("Enter in the password "," ");
}
