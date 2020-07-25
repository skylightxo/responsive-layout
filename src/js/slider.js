$(document).ready(function() {
  $(".fade").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    dots: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          dots: true
        }
      }
    ]
  });
});
