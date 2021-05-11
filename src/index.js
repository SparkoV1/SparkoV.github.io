$("html, body").animate({ scrollTop: "0px" }, 10);

jQuery(document).ready(function($) {
  const $menuToggle = $(".menu-toggle");
  const $headerNav = $(".header__nav");
  const $html = $("html");
  const $links = $(".header__nav-links");
  const $arrowUp = $(".arrow-up");
  const $headerLink = $(".header__nav-link");
  const $writeMeBtn = $(".main-screen__btn");

  $(window).on(
    "scroll",
    $.debounce(100, function() {
      if ($(this).scrollTop() > 200) {
        $arrowUp.addClass("active");
      } else {
        $arrowUp.removeClass("active");
      }
    }),
    ScrollReveal().reveal(
      ".my-skills__skill, .my-skills__foto,.gallery__item",
      {
        interval: 400,
        distance: "150px",
      }
    )
  );

  $menuToggle.on("click", function() {
    $html.toggleClass("overflow-hidden");
    $headerNav.toggleClass("active");
    $menuToggle.toggleClass("active");
  });

  $(".button").on("click", function() {
    $html.removeClass("overflow-hidden");
    $(".overflov-start").fadeOut(1000);
  });

  $links.on("click", function() {
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
  $writeMeBtn.on("click", function() {
    $("html, body").animate(
      { scrollTop: $(contacts).offset().top - -150 },
      500
    );
  });
  $(".form__contents").each(function() {
    this.reset();
  });
});
