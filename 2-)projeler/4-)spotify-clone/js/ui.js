export class UI {
  // Kurucu metot
  constructor() {
    // Html'deki elemanlara eriş
    this.list = document.querySelector("#list");
    this.form = document.querySelector("form");
    this.title = document.querySelector("#title");
    this.player = document.querySelector(".player");
  }

  // Api'dan gelen şarkı verilerine göre arayüzü renderlayan fonksiyon
  renderCards(songs) {
    // Html'deki şarkı listelenen alanın içeriğini sıfırla
    this.list.innerHTML = "";
    // Dışarıdan verilen şarkı verisini kullanarak herbir şarkı için bir html oluştur
    songs.forEach((song) => {
      // Bir tane card elemanı oluştur
      const card = document.createElement("div");

      // Oluşturulan elemana card classı ekle
      card.classList.add("card");

      // Card'a şarkıya ait resim,müzik,şarkı adı ve şarkıcı veya şarkı grubu adı bilgilerini ata

      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.image = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

      // Oluşturulan elemanın Html'ini belirle.Her şarkı cardının içeriğini dinamik hale getir
      card.innerHTML = `   
              <figure>
             
                <img
                  src="${song.images.coverarthq}"
                  alt="card-image"
                />
          
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>
              <div class="card-info">
                <h4>${song.title}</h4>
                <h4>${song.subtitle}</h4>
              </div>
            `;

      // Oluşturulan ,içeriği belirlenen ve class atanan cardları Html kısmındaki liste içerisine aktar.Burada `this` kullanılmasının sebebi bir class içerisinde bu class içerisindeki yapıya erişmemiz

      this.list.appendChild(card);
    });
  }

  // Loader render eden fonksiyon
  renderLoader() {
    this.list.innerHTML = ` 

      <div class="loader">
      <div class="cell d-0"></div>
      <div class="cell d-1"></div>
      <div class="cell d-2"></div>

      <div class="cell d-1"></div>
      <div class="cell d-2"></div>
  
  
     <div class="cell d-2"></div>
     <div class="cell d-3"></div>
  
  
     <div class="cell d-3"></div>
     <div class="cell d-4"></div>
  
  
    </div>`;
  }

  // Animasyon ekleyen fonksiyon
  toggleAnimation() {
    // Player içerisindeki image'e erişmeli
    const image = document.querySelector(".info img");
    // Erişilen resime eğer animate classı yoksa bunu ekle varsa bunu kaldır
    image.classList.toggle("animate");
  }

  // Player kısmını dinamik renderlayan fonksiyon

  renderPlayer(song) {
    // Player kısmının içeriğini dışarıdan parametre olarak verilen değer ile dinamik renderla

    this.player.innerHTML = ` 
      <div class="info">
        <img
          src="${song.image}"
          alt=""
        />
        <div>
          <h5>${song.title}</h5>
          <p>${song.subtitle}</p>
        </div>
      </div>


      <audio
        controls
        autoplay
        src="${song.mp3}"
      ></audio>

 
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>`;

    // Şarkı resminin oynatılma durumuna bağlı olarak resime bir animasyon ekleyebilmek için audio etiketine play ve pause addEventListenerları eklemeliyiz.
    const audio = document.querySelector("audio");

    audio.addEventListener("play", this.toggleAnimation);
    audio.addEventListener("pause", this.toggleAnimation);
  }
}
