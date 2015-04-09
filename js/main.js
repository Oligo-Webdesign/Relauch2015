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
            $('.hero').css('top',-(scrolled*0.0200)+'rem');
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
    $(document).ready(function($){
      //open the lateral panel
      $('.cd-btn').on('click', function(event){
        event.preventDefault();
        $('.cd-panel').addClass('is-visible');
      });
      //close the lateral panel
      $('.cd-panel').on('click', function(event){
        if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
          $('.cd-panel').removeClass('is-visible');
          event.preventDefault();
        }
      });
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