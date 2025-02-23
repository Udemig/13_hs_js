// Html'den Js'e çekilecek elemanları bir obje ile yönet
const elements = {
  menuList: document.querySelector("#menu-list"),
  inputs: document.querySelectorAll("input"),
};

// Arayüze menu cartları render edecek fonksiyon

const renderCard = (data) => {
  // Bu fonksiyona dışarıdan verilen datayı dön ve her data için bir Html oluştur.
  const cardsHtml = data
    .map(
      (
        menu
      ) => `    <div class="d-flex flex-column flex-md-row text-dark gap-3" id="card">
        <img
          class="rounded img-fluid shadow"
          src="${menu.img}"
          alt="card-image"
        />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${menu.title}</h5>
            <p class="fw-bold text-success">${(menu.price * 50).toFixed(2)}₺</p>
          </div>
          <p class="lead">
         ${menu.desc}
          </p>
        </div>
      </div>`
    )
    .join(" ");

  // Oluşturulan bu html'i arayüze aktar
  elements.menuList.innerHTML = cardsHtml;
};

export { elements, renderCard };
