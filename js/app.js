$(document).ready(function(){
    $('.article').click(function(){
        $('.article').removeClass('actual');
        $('.descripcion').hide();

        $(this).addClass('actual');
        $(this).children('.descripcion').show();
        alert("HOLA");
    });
});