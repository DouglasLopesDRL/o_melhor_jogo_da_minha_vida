$(document).ready(function(){
    $('#carousel').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('#iTel').mask('(00) 00000-0000', {
        placeholder: "Insira seu telfone celular..."
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira seu nome',
            tel: 'Por favor insira seu telefone celular',
            email: 'Por favor insira seu email'
        }
    });

    $('.imgDlcsFavoritas').click(function(){
        const dlcFavorita = $(this).parent().find('h3').text();
        $('#iDlc').val(dlcFavorita);
    });

    $('h1').click(function(){
        const destino = $('#carousel');
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});