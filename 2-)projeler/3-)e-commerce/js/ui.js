// Ui elemanlarının tutulduğu obje
const elements = {
  menuIcon: document.querySelector("#menu-icon"),
  menu: document.querySelector(".navbar"),
  productList: document.querySelector("#product-list"),
};

// Ürün kartlarını render eden fonksiyon

const renderProducts = (products, addToCartFunction) => {
  // product dizisinin dön ve bir html dizisi oluştur
  const productsHtml = products
    .map(
      (product) => ` <div class="product">
   
          <img
            src="${product.image}"
            alt="product-image"
            class="product-image"
          />
      
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price}</p>
            <a class="add-to-cart" data-id='${product.id}' >Add to cart</a>
  
          </div>
        </div>`
    )
    .join("");

  // Oluşturulan html'i arayüze aktar
  elements.productList.innerHTML = productsHtml;

  // Classı add-to-cart olan elemanlara eriş
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  // querySelectorAll metodu erişilen elemanları bir dizi şeklinde döndürdüğünden bu elemana direkt addEventListener ekleyemeyiz.Bunun için dizi içerisindeki elemanlara teker teker erişmemiz gerek
  for (let i = 0; i < addToCartButtons.length; i++) {
    // Dizinin içerisindeki butonlara teker teker eriş
    const addToCartButton = addToCartButtons[i];

    // Erişilen elemana bir click olayı ekle
    addToCartButton.addEventListener("click", addToCartFunction);
  }
};

export { elements, renderProducts };
