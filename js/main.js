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


    $('body').css({
    'overflow-x': 'scroll'
});



// Filter
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

    


// Arrow Collapse
$('.collapse').on('shown.bs.collapse', function(){
  $(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
});




// FILTER  
  // Price
  $(function() {
    $( "#slider-price" ).slider({
      range: true,
      min: 0,
      max: 3500,
      values: [ 75, 3000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "€" + $( "#slider-price" ).slider( "values", 0 ) +
    " - €" + $( "#slider-price" ).slider( "values", 1 ) );
  });
  // Price
  $(function() {
    $( "#slider-price" ).slider({
      range: true,
      min: 0,
      max: 3500,
      values: [ 75, 3000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "€" + $( "#slider-price" ).slider( "values", 0 ) +
    " - €" + $( "#slider-price" ).slider( "values", 1 ) );
  });










