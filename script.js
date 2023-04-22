$(document).ready(function(){
  $("form").submit(function(){
    alert("Your message has been received");
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