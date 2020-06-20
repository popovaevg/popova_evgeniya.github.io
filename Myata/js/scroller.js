$(document).ready(function(){
    $('#scroller').fadeOut();   
    //fade in/out based on scrollTop value
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroller').fadeIn();
        } else  {
            $('#scroller').fadeOut();
        }
    });
 
    // scroll body to 0px on click
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 100) $(".floating").css({top: '0', position: 'relative'});
        else $(".floating").css({top: '10px', position: 'fixed'});
    });
});