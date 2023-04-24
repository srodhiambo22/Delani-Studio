$(document).ready(function() {
  $('#myForm').submit(function(e) {
    e.preventDefault();
    var username = $('#Name').val();
    alert (username + ' ' + 'we have received your message. Thank you for reaching out to us!');
  });
});
  $(document).ready(function() {
    $('.image-text-container').hover(function() {
      $(this).find('img').hide();
      $(this).find('.text').show();
    }, function() {
      $(this).find('.text').hide();
      $(this).find('img').show();
    });
  });
  $(document).ready(function() {
    $('.image-container').hover(function() {
      $(this).find('.image-text').fadeIn(200);
    }, function() {
      $(this).find('.image-text').fadeOut(200);
    });
  });