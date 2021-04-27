jQuery(document).ready(function($) {
  const $menuToggle = $(".menu-toggle");
  const $headerNav = $(".header__nav");
  const $html = $("html");
  const $a = $(".header__nav a");

  $menuToggle.on("click", function() {
    $html.toggleClass("overflow-hidden");
    $headerNav.toggleClass("active");
    $menuToggle.toggleClass("active");
  });

  $a.on("click", function() {
    $menuToggle.removeClass("active");
    $headerNav.removeClass("active");
    $html.removeClass("overflow-hidden");
  });
});
