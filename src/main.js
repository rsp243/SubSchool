$(document).ready(function () {
    $('.slider__body').on('init', function (event, slick){
        $(this).find(".slide-next").last().trigger("click");
        setTimeout(function() {
            $('.slider__body').find(".slide-prev").trigger("click")
        }, 1000);
        setTimeout(function() {
            $('.slider__body').find(".slide-prev").fadeOut(1000)
        }, 2000);
        setTimeout(function() {
            $('.slider__body').find(".slide-next").fadeOut(1000)
        }, 2000);
    })

    $('.slider__body').slick({
        autoplay: true,
        dots: false,
        arrows: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slide-next"><img src="../img/right-scroll-slider-button.png"></button>',
        prevArrow: '<button type="button" class="slide-prev"><img src="../img/left-scroll-slider-button.png"></button>',
    })
})

function mouseenterlog() {
    $('.slider__body').find(".slide-next").fadeIn(1000)
    $('.slider__body').find(".slide-prev").fadeIn(1000)
}

function mouseleavelog() {
    $('.slider__body').find(".slide-next").fadeOut(1000)
    $('.slider__body').find(".slide-prev").fadeOut(1000)
}

$('.home-btn').on('click', function() {
    $('.courses').css('display', '')
    $('.video').css('display', 'none')
    $('.chat').css('display', 'none')
    $('.homework').css('display', 'none')
});

$('.video-btn').on('click', function() {
    $('.video').css('display', '')
    $('.courses').css('display', 'none')
    $('.chat').css('display', 'none')
    $('.homework').css('display', 'none')
});

$('.chat-btn').on('click', function() {
    $('.chat').css('display', '')
    $('.courses').css('display', 'none')
    $('.video').css('display', 'none')
    $('.homework').css('display', 'none')
});

$('.homework-btn').on('click', function() {
    $('.homework').css('display', '')
    $('.courses').css('display', 'none')
    $('.chat').css('display', 'none')
    $('.video').css('display', 'none')
});

