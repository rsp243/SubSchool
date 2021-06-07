$(document).ready(function () {
    let min_height = $('.profile .header').height()
    $('.availible-courses').css('height', min_height)
    $('.video-topic').css('height', min_height)
    $('.chat-topic').css('height', min_height)
    $('.homework-topic').css('height', min_height)


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
    $('.window-message').css('display', 'none')
    $('.chat-item').css('display', '')
    $('.window-message').css('height', 256.438)
});

$('.homework-btn').on('click', function() {
    $('.homework').css('display', '')
    $('.courses').css('display', 'none')
    $('.chat').css('display', 'none')
    $('.video').css('display', 'none')
});

$('.chat-item').on('click', function() {
    $('.window-message').css('display', '')
    let wid = $('.chat').width() * 0.9
    let input_text_wid = $('.chat').width() * 0.8
    $('.window-message').css('width', wid)
    $('.send-message-text').css('width', input_text_wid)
    $('.chat-item').css('display', 'none')
    $('.window-message h3').text('Чат с пользователем ' + $(this).text())
    let height_message_bar = ($('.chat').height() - ($('.header-block').height() + $('.chat-topic').height())) * 0.73 - $('.messages').height()
    $('.main-block').css('bottom', height_message_bar * -1)
    let height_window_message = $('.window-message').height()
    $('.window-message').css('height', height_window_message + height_message_bar)
})

$('.back-btn').on('click', function() {
    $('.window-message').css('display', 'none')
    $('.chat-item').css('display', '')
    $('.window-message').css('height', 256.438)
})

$('.video-item').on('click', function() {
    $('.window-video').css('display', '')
    $('.video-item').css('display', 'none')
    let wid = $('.video').width() * 0.9
    $('.window-video').css('width', wid)
    $('.plyr__video-embed').css('width', wid)
})

$('.back-btn-video').on('click', function() { 
    $('.window-video').css('display', 'none')
    $('.video-item').css('display', '')
})
