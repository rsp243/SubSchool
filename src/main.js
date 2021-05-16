$(document).ready(function () {
    $('.slider__body').on('init', function (event, slick){
        $(this).find(".slick-dots li").last().trigger("click");
        setTimeout(function() {
            $('.slider__body').find(".slick-dots li:eq( 1 )").trigger("click")
        }, 1000);
    })

    $('.slider__body').slick({
        autoplay: true,
        dots: true,
        arrows: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        adaptiveHeight: true,
    })
})