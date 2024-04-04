// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(function () {
    $('.slider').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.recommended-project-slider').slick({
        slidesToShow: 4,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});