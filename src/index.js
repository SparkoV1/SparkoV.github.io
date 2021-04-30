jQuery(document).ready(function($) {
  const $menuToggle = $(".menu-toggle");
  const $headerNav = $(".header__nav");
  const $html = $("html");
  const $a = $(".header__nav-links");
  const $arrowUp = $(".arrow-up");
  const $headerLink = $(".header__nav-link");

  $(window).on(
    "scroll",
    $.debounce(100, function() {
      if ($(this).scrollTop() > 200) {
        $arrowUp.addClass("active");
      } else {
        $arrowUp.removeClass("active");
      }
    })
  );

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

  $headerLink.on("click", function(e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 57 }, 500);
  });

  $arrowUp.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
