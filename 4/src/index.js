jQuery(document).ready(function ($) {
  const $menuToggle = $(".menu-toggle");
  const $headerNav = $(".header__nav");
  const $html = $("html");

  $(".slider").slick({
    dots: true,
  });
  $(".slick-prev").text("");
  $(".slick-next").text("");

  $menuToggle.on("click", function () {
    $html.toggleClass("overflow-hidden");
    $headerNav.toggleClass("active");
    $menuToggle.toggleClass("active");
  });
});
