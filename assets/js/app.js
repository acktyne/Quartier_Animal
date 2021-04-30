$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#sticky-header").addClass("active");
    }
    else {
        $("#sticky-header").removeClass("active");
    }
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top -140
    }, 500);
    return false;
});