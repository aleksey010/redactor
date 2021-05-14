jQuery(document).ready(function(){
    
    $('.hover-menu').click(function(){
        $('.body-hover-menu').toggleClass('active');
    });

    $('#redtext').keyup(function() {
        $('.text-screen').text( $('#redtext').val() );
    });
});