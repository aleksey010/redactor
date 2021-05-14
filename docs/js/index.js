jQuery(document).ready(function(){
    var dropdown_items = $('.dropdown-item');
    $('.hover-menu').click(function(){
        $('.body-hover-menu').toggleClass('active');
        $('.body-hover-menu_small').toggleClass('active_small');
        $('.hover-menu').toggleClass('active_small')
    });
    $('.main-dropdown').click(function(event){
        $(this).find(".dropdown-item").toggleClass('active');
    });
    $('#redtext').keyup(function() {
        $('.text-screen').text( $('#redtext').val() );
    });
});