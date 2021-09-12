// Set animation delay if data-delay is specified
Reveal.addEventListener('ready', function ( event ) {
  $('*[data-animate-delay]').each( function () { 
    var delay = $(this).attr("data-animate-delay");
      // $(this).css("-webkit-animation-delay", delay+"s"); 
      // $(this).css("animation-delay", delay+"s"); 
      $(this).css("--animate-delay", delay); 
      $(this).addClass('animate__delay-1s');
  });
});

// Set animation duration if data-duration is specified
Reveal.addEventListener('ready', function ( event ) {
  $('*[data-animate-duration]').each( function () { 
    var duration = $(this).attr("data-animate-duration");
      // $(this).css("-webkit-animation-duration", duration+"s"); 
      // $(this).css("animation-duration", duration+"s"); 
      $(this).css("--animate-duration", duration); 
  });
});

// Animate items that are not in a fragment
Reveal.addEventListener('slidechanged', function( event ) {
  // Animate elements that are not a fragment (or in a fragment)
  var filter = '*[data-animate]:not(.fragment):not(.fragment *)';
  
  $(event.currentSlide).find(filter).each( function () {
    $(this).addClass('animate__animated');
    $(this).addClass('animate__' + $(this).attr('data-animate'));
    $(this).addClass('animate__' + $(this).attr('data-animate-repeat'));
  });
  $(event.previousSlide).find(filter).each( function () {
    $(this).removeClass('animate__animated');
    $(this).removeClass('animate__' + $(this).attr('data-animate'));
    $(this).removeClass('animate__' + $(this).attr('data-animate-repeat'));
  });
});

// Animate fragments
Reveal.addEventListener('fragmentshown', function( event ) {
  function loop(i, el) { 
      if ($(el).attr('data-animate')) {
        $(el).addClass('animate__animated');
        $(el).addClass('animate__' + $(el).attr('data-animate'));
        $(el).addClass('animate__' + $(el).attr('data-animate-repeat'));
      }
      // $.each($(el).children().not('.fragment'), loop);
  };
  $.each(event.fragments, loop);
});

// Make the animation runnable again if fragment is hidden
Reveal.addEventListener('fragmenthidden', function( event ) {	  
  function loop(i, el) { 
      if ($(el).attr('data-animate')) {
        $(el).removeClass('animate__animated');
        $(el).removeClass('animate__' + $(el).attr('data-animate'));
        $(el).removeClass('animate__' + $(el).attr('data-animate-repeat'));
      }
      // $.each($(el).children().not('.fragment'), loop);
  };
  $.each(event.fragments, loop);
});
