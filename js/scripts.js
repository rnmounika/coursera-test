$(document).ready(function(){
    $('#mycarousel').carousel( { interval: 2000, pause: "false" } );
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause'))
        {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }else{
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');

        }
        
    });
    $('#btnReserve').click(function()
    {
        $('#reserveTable').modal('show')

    });
    $('.fa-sign-in').click(function()
    {
        $('#loginModal').modal('show')

    });
    
});
