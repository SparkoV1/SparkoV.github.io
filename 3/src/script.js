$(document).ready(function() {
  const $headerNavLink = $(".header");
  $(window).scroll(function() {
    if ($(document).scrollTop() > 450) {
      $headerNavLink.addClass("header-box__scroll-color");
    } else {
      $headerNavLink.removeClass("header-box__scroll-color");
    }
  });
});
