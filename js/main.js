// Parallax Scrolling
    $(window).scroll(function(e){
    parallax();
    });
    function parallax(){
        var scrolled = $(window).scrollTop();
            $('.hero').css('top',-(scrolled*0.0515)+'rem');
            $('.hero > div').css('top',-(scrolled*-0.005)+'rem');
            $('.hero > div ').css('opacity',1-(scrolled*.001));
    };

// Scroll to top
    $('.scrolltop').click(function(e)
    {
      $('html, body').animate({'scrollTop': 0}, 1500);
      e.preventDefault();
    });

// Hero Slider
    $.global = new Object();

    $.global.item = 1;
    $.global.total = 3;

    $(document).ready(function() 
      {
      
     $("#slides li:nth-child(1)").removeClass('buried');
      
      var SlideCount = $('#slides li').length;
      
     $.global.total = SlideCount; 

    $('#arrow-left').click(function() { Slide('back'); }); 
    $('#arrow-right').click(function() { Slide('forward'); }); 
      
    });

    function Slide(direction)
      {
      if (direction == 'back') { var $target = $.global.item - 1; }
      if (direction == 'forward') { var $target = $.global.item + 1; }
      if ($target == 0) { DoIt($.global.total); } 
      else if ($target > $.global.total) { DoIt(1); }  
      else { DoIt($target); }    
      }

    function DoIt(target)
    {
    $('.slide').addClass('buried');
      $.global.item = target; 
    var $newtarget = $("#slides li:nth-child("+target+")");
    $newtarget.removeClass('buried');
    }

// Overflow
    $('body').css({
      'overflow-x': 'scroll'
    });

// Arrow Collapse
    $('.collapse').on('shown.bs.collapse', function(){
      $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
        }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
    });

// FILTER  
    var width = $('.filter').width();
    $('.open').hide();
    $('.close').click(function(){
        $(this).parent().css('right','0');
        $('.open').show();
        $(this).hide();
    });
    $('.open').click(function(){
        $(this).parent().css('right','-285px');
        $('.close').show();
        $(this).hide();
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
