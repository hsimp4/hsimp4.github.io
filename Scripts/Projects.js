AOS.init({
    disable: 'mobile'
});

var target = window.location.hash;
target = target.replace('#', '');
window.location.hash = "";

$(function () {
    $(window).on('load', function() {
        if (target) {
            $('html, body').animate({
                scrollTop: $("#" + target).offset().top - 50
            }, 1000, 'swing', function () {});
        }
    });
});