 $(document).ready(
  function() {
    $("html").niceScroll({
      scrollspeed:100,
      mousescrollstep: 100,
      cursorborder: "none",
      cursorcolor: "none",
      bouncescroll: true
    });
  }
);



// Hiding Navigation
    $("div.navbar-fixed-top").autoHidingNavbar();


// Parallax Scrolling
    $(window).scroll(function(e){
    parallax();
    });
    function parallax(){
        var scrolled = $(window).scrollTop();
            $('.hero').css('top',-(scrolled*0.0215)+'rem');
            $('.hero > div').css('top',-(scrolled*-0.005)+'rem');
            $('.hero > div ').css('opacity',1-(scrolled*.001));
    };


// Scroll to top
    $('.scrolltop').click(function(e)
    {
      $('html, body').animate({'scrollTop': 0}, 1500);
      e.preventDefault();
    });

// Arrow Collapse
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
        }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
    });

// FILTER  
$(".close").click(function () {

    // Set the effect type
    var effect = 'slide';

    // Set the options for the effect type chosen
    var options = { direction: "right" };

    // Set the duration (default: 400 milliseconds)
    var duration = 500;

    $('.filter').toggle(effect, options, duration);
    $('#toggle > i').removeClass('fa-times').addClass('fa-search');
});
      // Price
          $(function() {
            $( "#slider-price" ).slider({
              range: true,
              min: 0,
              max: 3500,
              values: [ 0, 500 ],
                slide: function( event, ui ) {
                    $( "#price" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
                }
            });
            $( "#price" ).val( "€" + $( "#slider-price" ).slider( "values", 0 ) +
            " - €" + $( "#slider-price" ).slider( "values", 1 ) );
          });
      // Lightcolor
          $(function() {
            $( "#slider-lightcolor" ).slider({
              range: true,
              min: 1000,
              max: 10000,
              values: [ 1000, 2000 ],
                slide: function( event, ui ) {
                    $( "#lightcolor" ).val( "K" + ui.values[ 0 ] + " - K" + ui.values[ 1 ] );
                }
            });
            $( "#lightcolor" ).val( "K" + $( "#slider-lightcolor" ).slider( "values", 0 ) +
            " - K" + $( "#slider-lightcolor" ).slider( "values", 1 ) );
          });
      // LightPower
          $(function() {
            $( "#slider-lightPower" ).slider({
              range: true,
              min: 100,
              max: 5500,
              values: [ 100, 1000 ],
                slide: function( event, ui ) {
                    $( "#lightPower" ).val( "lm" + ui.values[ 0 ] + " - lm" + ui.values[ 1 ] );
                }
            });
            $( "#lightPower" ).val( "lm" + $( "#slider-lightPower" ).slider( "values", 0 ) +
            " - lm" + $( "#slider-lightPower" ).slider( "values", 1 ) );
          });
      // Color Picker
          $('select[name="colorpicker-fontawesome"]').simplecolorpicker({
            theme: 'fontawesome',
          });


$('#carousel-hero').carousel({
  interval: 2000
});

$('#carousel-impression').carousel({
  interval: 4000,
  keyboard: true
});


$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(300).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});