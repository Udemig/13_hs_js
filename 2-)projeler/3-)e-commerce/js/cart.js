import { saveToLocalStorage } from "./helper.js";

const addToCart = (e, products) => {
  // add-to-cart butonların tıklandığında butonları birbirinden ayırt etmek için bunlara data-id ile birer uniq id atadık.Bu sayede bu butonların birbirinde farklı olmasını sağladık.

  // Tıklanılan elemanı  id'sine eriş
  const productId = +e.target.dataset.id;

  // Id'si bilinen ürünü product dizisi içerisinden bul

  const product = products.find((product) => product.id === productId);

  console.log(product);

  saveToLocalStorage(product);
};

export { addToCart };
