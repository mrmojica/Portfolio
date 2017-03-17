$("#nav-about").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        1000);
});

$("#nav-work").click(function() {
    $('html,body').animate({
        scrollTop: $("#work").offset().top},
        1250);
});

$("#nav-contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        1500);
});

$(".arrow-link").click(function() {
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        1000);
});

$(".contact-link").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        2000);
});

