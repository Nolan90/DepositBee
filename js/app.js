$('a[href*=#wrapper]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});



$('a[href*=#home-stats]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});



$(document).ready(function(){
  $(".show-hidden").click(function(){
    $(".home-stat-hidden").toggle("slow");
  });
});


$( "#blur" ).on( "mouseover", function() {
  $( this ).parent().css( "background-image", "url('img/no-yellow-around-mirror-blur.png')" );
});
$( "#blur" ).on( "mouseleave", function() {
  $( this ).parent().css( "background-image", "url('img/no-yellow-around-mirror.png')" );
});


$(document).ready(function() {
    $('#faq-list h2').click(function() {

        $(this).next('.answer').slideToggle(700);
        $(this).toggleClass('close');

    });
});