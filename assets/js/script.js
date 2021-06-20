// Navigation Menu
var trigger = document.querySelector("#hamburger");
var navigation = document.querySelector(".navbar-nav");

trigger.addEventListener("click", function () {
  navigation.classList.toggle("show");
  trigger.querySelector("i").classList.toggle("fa-times");
  trigger.querySelector("i").classList.toggle("fa-bars");
});

// Owl Carousel Slider
jQuery(document).ready(function ($) {
  $(".service-slider").owlCarousel({
    loop: true,
    items: 3,
    nav: true,
    navText: [
      "<span class='fas fa-arrow-left'></span>",
      "<span class='fas fa-arrow-right'></span>",
    ],
    stagePadding: 10,
    margin: 20,
    autoplay: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
        stagePadding: 5,
      },
      600: {
        items: 2,
        margin: 10,
        stagePadding: 0,
        loop: true,
      },
      1025: {
        items: 3,
      },
    },
  });
  $(".service-slider").trigger("next.owl.carousel");
});

// Scroll to top
$(document).ready(function () {
  var duration = 300;

  $(".page-top").click(function (event) {
    event.preventDefault();
    $("html").animate({ scrollTop: 0 }, duration);
    return false;
  });
});
