
$(window).scroll(function() {
    $('.achieve').each(function(){
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInDown");
        }
    });
});