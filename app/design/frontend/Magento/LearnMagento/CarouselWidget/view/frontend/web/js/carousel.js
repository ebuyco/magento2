define([
    'jquery',
    'LearnMagento_CarouselWidget/js/carousel/carousel.min.js'
], function ($) {
    'use strict';
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true
    });
});