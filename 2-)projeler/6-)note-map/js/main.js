import { personIcon } from "./constant.js";
import elements from "./ui.js";

/*
* window objesi kullanıcının açmış olduğu tarayıcı sekmesine karşılık gelir.Bu obje içerisinde birçok özellik tutar (alert,cookies,close,localstorage,...).Bu obje içerisinde navigator adında bir obje bulunur.Bu obje ise kullanıcının açmış olduğu tarayıcı sekmesi ile ilgili önemli veriler tutar (loacation,languages,gpu,bluetooth,storage).Bu kısımda karşımıza geoLocation adında bir obje çıkar.Bu obje içerisindeki  clearWatch,getCurrentPosition,watchPosition metotları ile kullanıcının konumu ile alakalı işlemler yapmamızı sağlar.Kulllanıcının anlık konumunu almaya yarayan getCurrentPosition metodu bizden iki adet call-back function ister.Bunlar sırasıyla success ve error durumları içindir.Bizde bu projede eğer success ise kullanıcının konumunda uygulamayı başlatacağız ama error kısmında ise uygulamayı varsayılan konumda başlatacağız.



*/
// * Global Variables
let clickedCoords;
let notes = JSON.parse(localStorage.getItem("notes")) || [];

console.log(notes);

window.navigator.geolocation.getCurrentPosition(
  // Eğer kullanıcı konum bilgisini paylaşırsa uygulamayı bu konumda başlat
  (e) => {
    loadMap([e.coords.latitude, e.coords.longitude], "Mevcut Konum");
  },
  // Eğer konum bilgisini paylaşmazsa uygulamayı varsayılan konumda başlat (Anıtkabir)
  (e) => {
    loadMap([39.924655, 32.836576], "Varsayılan Konum");
  }
);

// ! Harita oluşturan fonksiyon

function loadMap(currentPosition, message) {
  // Haritanın Kapsayıcısının Kurulumu ve default zoom çubuğunu iptal et
  var map = L.map("map", { zoomControl: false }).setView(currentPosition, 11);

  // Harita Content Kurulumu
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // Haritanın zoom çubuğunun konumunu ayarla

  L.control.zoom({ position: "bottomright" }).addTo(map);

  // Kullanıcının başlanngıç konumuna bir marker ekle
  L.marker(currentPosition, { icon: personIcon }).addTo(map).bindPopup(message);

  // Harita üzerindeki tıklanma olayını izle
  map.on("click", onMapClick);
}

// ! Harita üzerinde tıklanma olayı gerçekleşince çalışacak fonksiyon
function onMapClick(e) {
  // Harita üzerinde tıklanılan yerin kordinatını clickedCoords adındaki global scope'a sahip elemana aktar
  clickedCoords = [e.latlng.lat, e.latlng.lng];

  // Aside kısmını ekleme moduna geçir
  elements.aside.classList.add("add");
}

// ! Cancel Btn'e tıklayınca aside kısmını eski haline çeviren fonksiyon
elements.cancelBtn.addEventListener("click", () => {
  elements.aside.classList.remove("add");
});

// ! Form gönderildiğinde çalışacak fonksiyon

elements.form.addEventListener("submit", (e) => {
  // Sayfa yenilemesini engelle
  e.preventDefault();

  // Form içerisindeki değerlere eriş
  const title = e.target[0].value;
  const date = e.target[1].value;
  const status = e.target[2].value;

  // Bir note objesi oluştur

  const newNote = {
    // id,title,date,status,coords
    id: new Date().getTime(),
    title,
    date,
    status,
    coords: clickedCoords,
  };

  // Note objesini notes dizisine ekle
  notes.push(newNote);

  // Localstorage'ı güncelle
  localStorage.setItem("notes", JSON.stringify(notes));

  // Formu resetle
  e.target.reset();

  // Aside kısmını eski haline çevir

  elements.aside.classList.remove("add");
});

// ! Mevcut notları aside kısmındaki liste içerisinde renderlayan fonksiyon

function renderNotes() {
  // Notes dizisini dönüp her bir note için bir html oluştur
  const noteCards = notes.map(
    (note) => ` <li>
          <div>
            <p>Title</p>
            <p>Date</p>
            <p>Status</p>
          </div>
          <div class="icons">
            <i class="bi bi-airplane-fill" id="fly-btn"></i>
            <i class="bi bi-trash" id="delete-btn"></i>
          </div>
        </li>`
  );
  // Elde edilen Html'i aside kısmındaki liste'ye aktar

  elements.noteList.innerHTML = noteCards;
}
