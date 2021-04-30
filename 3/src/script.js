$(document).ready(function() {
  const $headerNavLink = $(".header");
  $(window).scroll(function() {
    if ($(document).scrollTop() > 450) {
      $headerNavLink.addClass("sticky");
    } else {
      $headerNavLink.removeClass("sticky");
    }
  });
});
