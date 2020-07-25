const newProductsBtn = $(".main__new-products_btn");
const sliderProducts = $(".new-products__slider");

let flag = true;

newProductsBtn.click(function() {
  if (flag) {
    sliderProducts.slideDown();
    newProductsBtn.text("CLOSE NEW PRODUCTS");
    flag = !flag;
  } else if (!flag) {
    sliderProducts.slideUp();
    newProductsBtn.text("SHOW ALL NEW PRODUCTS");
    flag = !flag;
  }
});

$(document).ready(function() {
  sliderProducts.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    dots: false,
    arrows: false,
    pauseOnHover: true
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         arrows: false,
    //         fade: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 992,
    //       settings: {
    //         dots: true
    //       }
    //     }
    //   ]
  });
});
