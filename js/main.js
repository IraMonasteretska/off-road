$(document).ready(function () {

    // header scroll 

    const $header = $("header.header")
    let prevScroll
    let lastShowPos

    $(window).on("scroll", function () {
        const scrolled = $(window).scrollTop()

        if (scrolled > 50 && scrolled > prevScroll) {
            $header.addClass("scroll")
            lastShowPos = scrolled
        } else if (scrolled <= Math.max(lastShowPos - 50, 0)) {
            $header.removeClass("scroll")
        }
        prevScroll = scrolled
    })


    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    // team slider
    var swiper = new Swiper(".teamslider", {
        slidesPerView: "auto",
        spaceBetween: 50,
        loop: true,
        speed: 6000,
        
        autoplay: {
            disableOnInteraction: false,
            delay: 1,
        },
    });
    
    // arbejde med slider
    var swiper1 = new Swiper(".arbejdeslider", {
        slidesPerView: "auto",
        spaceBetween: 50,
        loop: true,
        speed: 6000,

        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
    });
    

      // burger menu
      $('.burger').on('click', function () {
        $('.header__mobile-menu').toggleClass('active');
        $('body').toggleClass('mob-menu');
        $(this).toggleClass('on');

        $('header.header').toggleClass('active')
    });

})