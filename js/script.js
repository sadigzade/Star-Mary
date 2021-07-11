$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger, .menu__body').toggleClass('_active');
        $('.header').toggleClass('_special');
    });
});