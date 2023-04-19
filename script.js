  $(document).ready(function(){
    $("form").submit(function(){
      alert("Your message has been received");
    });
  });
  $(document).ready(function() {
    $(".hover-effect").hover(function() {
      $(this).toggleClass("hover-text");
    });
  });