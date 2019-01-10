AOS.init({
    disable: 'mobile'
});

$(function () {
    $(window).bind("load", function() {
        var url = window.location.href;
        var splitURL = url.split('#');
        
        if (splitURL[1] !== 'undefined') {
            let destination = splitURL[1];
            $('html, body').animate({
                scrollTop: $('#' + destination).offset().top - 50
            }, 1500);
        }
    });
});