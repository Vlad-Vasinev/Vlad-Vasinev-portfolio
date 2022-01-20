
$(function () {
    $(document).ready(function () {

        $(".menu__list").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top }, 700);
        });

    });

});

let scrollUp = document.querySelector('.scrollup-btn');
let header = document.querySelector('.header');

if (scrollUp) {
    scrollUp.addEventListener('click', () => {
        header.scrollIntoView({ block: "center", behavior: "smooth" });
    });
}