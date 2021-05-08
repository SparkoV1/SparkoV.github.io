jQuery(document).ready(function ($) {
  const $menuToggle = $(".menu-toggle");
  const $headerNav = $(".header__nav");
  const $html = $("html");

  $(".slider").slick({
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(window).on("resize", function () {
    if ($(this).width() > 600) {
      $(".slick-prev").text("");
      $(".slick-next").text("");
    }
  });

  $(".slick-prev").text("");
  $(".slick-next").text("");

  $menuToggle.on("click", function () {
    $html.toggleClass("overflow-hidden");
    $headerNav.toggleClass("active");
    $menuToggle.toggleClass("active");
  });
});
