$(document).ready(function(){
    $('.article').onClick(function(
        $('.article').removeClass('actual');
        $('.descripcion').hide();

        $(this).addClass('actual');
        $(this).children('.descripcion').show();
    ));
    alert();
});