const mobileMenu = $(".mobile-menu");
const overlay = $(".dark-overlay");
const btn = $(".menu-button");
const cart = $(".cart");

// active
function handleToggle(e) {
  e.preventDefault();
  const $this = $(this);
  $this.parent(".has-submenu").toggleClass("opened");
  $this.next("ul").slideToggle(500, function() {
    const $this = $(this);
    if ($this.is(":hidden")) {
      $this.find(".has-submenu").removeClass("opened");
      $this.find("ul").hide();
    }
  });
}

$(document).on("click", ".is-submenu", handleToggle);

$(document).on("click", ".header__settings_cart", function(e) {
  e.preventDefault();
  if (overlay.hasClass("visible")) return;
  else {
    overlay.toggleClass("visible");
  }
  cart.toggleClass("visible");
});

$(document).on("click", ".menu-button", function(e) {
  e.preventDefault();
  overlay.toggleClass("visible");
  if (mobileMenu.hasClass("visible")) {
    $(".has-submenu")
      .removeClass("opened")
      .find("ul")
      .slideUp();
  }
  mobileMenu.toggleClass("visible");
});

$(document).on("click", ".close-button", function(e) {
  e.preventDefault();
  overlay.toggleClass("visible");
  cart.removeClass("visible");
});

function initMobile() {}

function initDesktop() {
  cart.removeClass("visible");
  overlay.removeClass("visible");
  mobileMenu.removeClass("visible");
  $(".has-submenu")
    .removeClass("opened")
    .find("ul")
    .hide();
}

ssm.addState({
  id: "tablet",
  query: "(max-width: 900px)",
  onEnter: function() {
    initMobile();
  }
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 900px)",
  onEnter: function() {
    initDesktop();
  }
});
