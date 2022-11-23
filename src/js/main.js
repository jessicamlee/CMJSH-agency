// ------ Burger Menu -------- //
jQuery(function($) {

    var windowWidth = $('body').width();

    /* Hide/Show Header */
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta) {
          return;
        }

        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('header-down').addClass('header-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('header-up').addClass('header-down');
            }
        }
        lastScrollTop = st;
    }

    setInterval(function() {
        if(didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 300);

    /* Navigation (Burger) */
    const targetElement = document.querySelector('.gn');
    bodyScrollLock.disableBodyScroll(targetElement);
    bodyScrollLock.enableBodyScroll(targetElement);
    
    var $burger = $('.gn-trigger');
    var $gnav = $('.gn');

    $($burger).on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('is-active')) {
            closeNav();
        } else {
            $(this).addClass('is-active');
            $('.gn').slideDown();
            bodyScrollLock.disableBodyScroll(targetElement);
            jQuery('main').css('opacity', '0.2');
        }
    });

    $('.gn a').on('click', function(e){
        closeNav();
    });

    function closeNav() {
        $($burger).removeClass('is-active');
        $($gnav).slideUp();
        bodyScrollLock.enableBodyScroll(targetElement);
        jQuery('main').css('opacity', '1');
    }

    $(window).resize(function() {
        windowWidth = $('body').width();
        if(windowWidth > 676 && $($burger).hasClass('is-active')) {
            // If screen > 676px wide
            setTimeout(function(){
                $($burger).removeClass('is-active');
                $($gnav).slideUp(0);
            }, 300);
            $($burger).removeClass('is-active')
            $($gnav).slideUp();
            bodyScrollLock.enableBodyScroll(targetElement);
        }
    });
});