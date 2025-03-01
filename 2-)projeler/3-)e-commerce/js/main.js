import fetchProducts from "./api.js";
import { addToCart } from "./cart.js";
import { elements, renderProducts } from "./ui.js";

elements.menuIcon.addEventListener("click", () => {
  elements.menu.classList.toggle("open-menu");
});

document.addEventListener("DOMContentLoaded", () => {
  // Bu projede  kullanıcı ana sayfada ise api'dan verileri almalı ve arayüzü renderlamalıyız ama eğer sepet sayfasında isek sepetteki ürünleri renderlamalıyız.Bu sebeple hangi sayfada olduğumuza karar vermeliyiz.

  // ? Hangi sayfadayız ?
  if (window.location.pathname.includes("/cart.html")) {
    // * Sepet Sayfası İşlemleri
  } else {
    // * Ana Sayfa İşlemleri
    fetchProducts()
      .then((products) => {
        renderProducts(products, (e) => {
          addToCart(e, products);
        });
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }
});
