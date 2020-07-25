const cartEmpty = $(".cart__empty");
const cartReturn = $(".cart__return");
const cartMeta = $(".cart__meta");
const cartItem = $(".cart__item");
const cartCount = $(".cart__count");

let subtotal = 0;
let itemsInCart = 1;

function showItem() {
  cart.toggleClass("visible");
  overlay.toggleClass("visible");
  cartEmpty.removeClass("visible");
  cartReturn.removeClass("visible");
  cartMeta.addClass("visible");
  cartItem.addClass("visible");
}

function clearCart(e) {
  e.preventDefault();
  cartCount.text("0");
  cart.toggleClass("visible");
  overlay.toggleClass("visible");
  cartMeta.removeClass("visible");
  cartReturn.addClass("visible");
  cartEmpty.addClass("visible");
  subtotal = 0;
  itemsInCart = 1;
  $(".cart__item").remove();
}

$(document).on("click", ".cart__btns_checkout", clearCart);

$(document).on("click", ".cart__return_btn", function(e) {
  e.preventDefault();
  cart.toggleClass("visible");
  overlay.toggleClass("visible");
});

$(document).on("click", ".dark-overlay", function() {
  cart.toggleClass("visible");
  overlay.toggleClass("visible");
});

$(document).on("click", ".main__recent_item_cart", addItem);

function addItem(e) {
  e.preventDefault();
  const $this = $(this);
  $(".price").text(subtotal);
  cartCount.text(itemsInCart);

  if ($this.attr("data-id") === "1") {
    $(".cart__list").append(
      `<li class="cart__item">
    <a class="item__remove" href="#"></a>
    <a class="item__img_1" href="#"></a>
    <div class="item__content">
        <div class="item__name">
            <p>Portable Bluetooth Speaker 
            <span class="item__qty">Qty: 1</span>
            </p>
        </div>
        <span class="item__cost">$249</span>
    </div>
</li>`
    );
    itemsInCart += 1;
    subtotal += 249;
    $(".price").text(subtotal + "$");
  }
  if ($this.attr("data-id") === "2") {
    $(".cart__list").append(
      `<li class="cart__item">
  <a class="item__remove" href="#"></a>
  <a class="item__img_2" href="#"></a>
  <div class="item__content">
      <div class="item__name">
          <p>Elephant Chair 
          <span class="item__qty">Qty: 1</span>
          </p>
      </div>
      <span class="item__cost">$169</span>
  </div>
</li>`
    );
    itemsInCart += 1;
    subtotal += 169;
    $(".price").text(subtotal + "$");
  }
  if ($this.attr("data-id") === "3") {
    $(".cart__list").append(
      `<li class="cart__item">
  <a class="item__remove" href="#"></a>
  <a class="item__img_3" href="#"></a>
  <div class="item__content">
      <div class="item__name">
          <p>Headphones
          <span class="item__qty">Qty: 1</span>
          </p>
      </div>
      <span class="item__cost">$499</span>
  </div>
</li>`
    );
    itemsInCart += 1;
    subtotal += 499;
    $(".price").text(subtotal + "$");
  }
  if ($this.attr("data-id") === "4") {
    $(".cart__list").append(
      `<li class="cart__item">
  <a class="item__remove" href="#"></a>
  <a class="item__img_4" href="#"></a>
  <div class="item__content">
      <div class="item__name">
          <p>Decorative Alarm Clock
          <span class="item__qty">Qty: 1</span>
          </p>
      </div>
      <span class="item__cost">$65</span>
  </div>
</li>`
    );
    itemsInCart += 1;
    subtotal += 65;
    $(".price").text(subtotal + "$");
  }
  if ($this.attr("data-id") === "5") {
    $(".cart__list").append(
      `<li class="cart__item">
  <a class="item__remove" href="#"></a>
  <a class="item__img_5" href="#"></a>
  <div class="item__content">
      <div class="item__name">
          <p>Molded Plastic Armhair
          <span class="item__qty">Qty: 1</span>
          </p>
      </div>
      <span class="item__cost">$560</span>
  </div>
</li>`
    );
    itemsInCart += 1;
    subtotal += 560;
    $(".price").text(subtotal + "$");
  }
  if ($this.attr("data-id") === "6") {
    $(".cart__list").append(
      `<li class="cart__item">
  <a class="item__remove" href="#"></a>
  <a class="item__img_6" href="#"></a>
  <div class="item__content">
      <div class="item__name">
          <p>Lounge Chair
          <span class="item__qty">Qty: 1</span>
          </p>
      </div>
      <span class="item__cost">$599</span>
  </div>
</li>`
    );
    itemsInCart += 1;
    subtotal += 599;
    $(".price").text(subtotal + "$");
  }

  if ($this.attr("data-id") === "7") {
    $(".cart__list").append(
      `<li class="cart__item">
  <a class="item__remove" href="#"></a>
  <a class="item__img_7" href="#"></a>
  <div class="item__content">
      <div class="item__name">
          <p>Clinical gate Armchair
          <span class="item__qty">Qty: 1</span>
          </p>
      </div>
      <span class="item__cost">$2350</span>
  </div>
</li>`
    );
    itemsInCart += 1;
    subtotal += 2350;
    $(".price").text(subtotal + "$");
  }
  showItem();
}
