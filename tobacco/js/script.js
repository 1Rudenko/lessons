new Swiper ('.hero__swiper',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        loop: true,
        effect: 'slide',
    },
    autoplay: {
        delay: 3000,
        // stopOnLastSlide: true,
        autoplayDisableOnInteraction:true,
    },
    speed: 1000,
});
$(document).ready(function() {
    $('.header__icon').click(function(event) {
        $('.header__icon,.header__menu').toggleClass('active');
    });
});