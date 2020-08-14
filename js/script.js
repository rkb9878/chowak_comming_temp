$(document).ready(function () {
    $('.hamburger-menu').click(function () {
        $('.navigation').toggleClass('change');
    });
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        console.log(position);
        if (position > 290) {
            $('.container_card').addClass('ene')
        }else {
            $('.container_card').removeClass('ene')
        }
    });
});
