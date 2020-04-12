$(document).ready(function(){
    $('#nav-button').click(function(){
        $(this).toggleClass('open');
        $('#mobile-nav').toggleClass('mobile-nav-open');
    });
});
