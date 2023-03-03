import * as customFunctions from './modules/functions.js'
customFunctions.handleBurger()
customFunctions.handleFaq()
// customFunctions.handleMap()
// vendors

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-testimonials', {
        type: 'loop',
        perPage: 1,
        autoplay: false,
        interval: 8000,
        updateOnMove: true,
        pagination: false,
        gap: '20px',
        breakpoints: {},
    }).mount()

    new Splide('#splide-works', {
        type: 'loop',
        perPage: 3,
        autoplay: false,
        interval: 8000,
        updateOnMove: true,
        pagination: false,
        gap: '20px',
        breakpoints: {
            576: {
                perPage: 1,
            },
        },

        classes: {
            arrows: 'splide__arrows splide__btn-list',
            arrow: 'splide__arrow splide__btn',
            prev: 'splide__arrow--prev splide__btn-prev--works',
            next: 'splide__arrow--next splide__btn-next--works',
        },

        arrows: {
            prev: '.splide__btn-prev--works',
            next: '.splide__btn-next--works',
        },
    }).mount()
})
