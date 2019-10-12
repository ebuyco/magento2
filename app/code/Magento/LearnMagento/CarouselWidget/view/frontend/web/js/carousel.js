define([
    'jquery',
    'LearnMagento_CarouselWidget/js/carousel/owl.carousel.min'
], function ($) {
    'use strict';
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true
    });
});