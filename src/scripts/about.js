$(document).ready(function() {
    // Initialize the accordion
    $(".accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    // Initialize the slider
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1400,
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '0'
    });

    // Fade in effect for the content
    $('main').hide().fadeIn(1000);
});
