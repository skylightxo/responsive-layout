const scrollBtn = $(".progress__scroll");

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      scrollBtn.fadeIn();
    } else {
      scrollBtn.fadeOut();
    }
  });

  scrollBtn.click(function() {
    $("html, body").animate({ scrollTop: 0 }, 200);
    return false;
  });
});
