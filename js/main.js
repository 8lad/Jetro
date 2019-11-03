$(function() {
    $('.slider__inner').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.slider__item-navigation'
    });
});
$('.slider__item-navigation').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
            breakpoint: 930,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 430,
            settings: {
                slidesToShow: 2,
            }
        }
    ]

});

$('.header__menu-btn').on('click', function() {
    $('.header__menu > ul').slideToggle();
});