var main = function () {
    $('.descripcion').addClass('escondido');
    
    $('article').click(function () {
        $(this).children('.descripcion').toggleClass('escondido');
    });
};

$(document).ready(main);