$(document).ready(function() {
  const $headerNavLink = $(".header");
  $(window).scroll(function() {
    if ($(document).scrollTop() > 450) {
      $headerNavLink.addClass("sticky");
    } else {
      $headerNavLink.removeClass("sticky");
    }
  });

  let delay = 36,
    output = $(".time-left").text(delay),
    timer = setInterval(function() {
      output.text(--delay);
      if (!delay) {
        clearInterval(timer);
      }
    }, 60 * 1000);
});
