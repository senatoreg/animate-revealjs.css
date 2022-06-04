// Set animation delay if data-delay is specified
Reveal.addEventListener('ready', function ( event ) {
  document.querySelectorAll('*[data-animate-delay]').forEach( function(e) {
    let delay = e.getAttribute('data-animate-delay');
    e.style.setProperty('--animate-delay', delay);
    e.classList.add('animate__r-delay');
  });
});

// Set animation duration if data-duration is specified
Reveal.addEventListener('ready', function ( event ) {
  document.querySelectorAll('*[data-animate-duration]').forEach( function(e) {
    let duration = e.getAttribute('data-animate-duration');
    e.style.setProperty('--animate-duration', duration);
  });
});
