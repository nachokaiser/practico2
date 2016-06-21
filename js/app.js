var main = function () {
    $('.descripcion').addClass('escondido');
    $('nav').addClass('nav-escondido');
    
    $('article').click(function () {
        $(this).children('.descripcion').toggleClass('escondido');
        $(this).children('img').toggleClass('escondido');
    });
    
    $('#menu-btn').click(function () {
        $('nav').toggleClass('nav-escondido');
    });
    
    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
        
        $('nav').addClass('nav-escondido');
    });
};

$(document).ready(main);