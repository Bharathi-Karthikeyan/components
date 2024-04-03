$('button').click(function() {
  $('body, button, input, .notification').addClass('active');
  setTimeout(function() {
    $('body, button, input, .notification').removeClass('active');
  }, 180000); 
});

$('.notification').click(function() {
  $('.notification, input').removeClass('active');
});
