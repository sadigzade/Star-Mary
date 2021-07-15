$(document).ready(function() {
    // $('.slider-clients').slick({
    //     asNavFor: '.slider-row',
    // });
    // $('.slider-row').slick({
    //     asNavFor: '.slider-clients',
    //     slidesToShow: 4,
    // });

    $('.cases-body__content').slick({
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 601,
                settings: {
                    arrows: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    })
});