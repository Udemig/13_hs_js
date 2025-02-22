// ! Ay Dizisi
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// ! Html'den Javascript'e çekilen elemanlar
const addBox = document.querySelector(".add-box");
const popupBoxContainer = document.querySelector(".popup-box");
const popupBox = document.querySelector(".popup");
const closeBtn = document.querySelector("#close-btn");
const form = document.querySelector("form");
const wrapper = document.querySelector(".wrapper");

// ! localstorage'dan note verilerini al.Eğer localstorage'da note yoksa bunun başlangıç değerini boş dizi olarak belirle

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Sayfanın yüklenme anını izle
document.addEventListener("DOMContentLoaded", () => {
  // Sayfa yüklendiğinde notları render eden fonksiyonu çalıştır
  renderNotes(notes);
});

// * addBox elemanına tıklanınca popup'ı aç

addBox.addEventListener("click", () => {
  //  popupBoxContainer &&  popupBox ı görünür kılmak için show classı ekle
  popupBoxContainer.classList.add("show");
  popupBox.classList.add("show");

  // Body'nin kaydırılmasını engelle
  document.querySelector("body").style.overflow = "hidden";
});

// * closeBtn'e tıklanınca popup'ı kapat
closeBtn.addEventListener("click", () => {
  //  popupBoxContainer &&  popupBox ekrandan gizlemek için  show classını kaldır
  popupBoxContainer.classList.remove("show");
  popupBox.classList.remove("show");

  // Body'nin kaydırılmasını auto'ya çevir
  document.querySelector("body").style.overflow = "auto";
});

// * formun gönderilmesini izle
form.addEventListener("submit", (e) => {
  //  form'un sayfa yenilmesini engelle
  e.preventDefault();

  // Form içerisindeki input ve textarea'ya eriş
  const titleInput = e.target[0];
  const descriptionInput = e.target[1];

  //  input ve textarea nın değerlerine eriş ve başında-sonunda boşluk varsa bunu kaldır
  let title = titleInput.value.trim();
  let description = descriptionInput.value.trim();

  // Eğer inputlar boş bırakılmışsa uyarı ver

  if (!title && !description) {
    alert("Lütfen formdaki gerekli kısımları doldurunuz !");

    return; // Burada return kullanımı ile if bloğu çalıştıktan sonras kodun devam etmesini engelledik
  }

  // Tarih verisini oluştur
  const date = new Date();

  // Gün,ay,yıl ve id değerleri oluştur
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const id = date.getTime();

  // Not verisini yönetmek için bir obje oluştur.

  let noteInfo = {
    id,
    title,
    description,
    date: `${month} ${day},${year}`,
  };

  // noteInfo'yu note dizisine ekle note
  notes.push(noteInfo);

  // LocalStorage'a not dizisini ekle
  localStorage.setItem("notes", JSON.stringify(notes));

  // Input ve textarea elemanlarının içeriğini temizle

  titleInput.value = "";
  descriptionInput.value = "";

  //  popupBoxContainer &&  popupBox ekrandan gizlemek için  show classını kaldır
  popupBoxContainer.classList.remove("show");
  popupBox.classList.remove("show");

  // Body'nin kaydırılmasını auto'ya çevir
  document.querySelector("body").style.overflow = "auto";

  // Notları render et
  renderNotes(notes);
});

// Notları arayüze render edecek fonksiyon

function renderNotes(notes) {
  // Note dizisindeki herbir elemanı dön
  notes.forEach((note) => {
    // Note dizisindeki herbir eleman için birer note kartı oluştur

    let noteEleman = `<li class="note">
        <!-- Note Details -->
        <div class="details">
          <!-- Title && Description -->
          <p class="title">${note.title}</p>
          <p class="description">${note.description}</p>
        </div>
        <!-- Bottom -->
        <div class="bottom">
          <span>${note.date}</span>
          <div class="settings">
            <!-- Icon -->
            <i class="bx bx-dots-horizontal-rounded"></i>
            <!-- Menu -->
            <ul class="menu">
              <li><i class="bx bx-edit"></i> Düzenle</li>
              <li><i class="bx bx-trash-alt"></i> Sil</li>
            </ul>
          </div>
        </div>
      </li>`;

    // insertAdjacentHTML metodu bir elemanı bir html elemanına göre yerleştirmek için  kullanılır.Bu metot hangi konuma ekleme yapılacağı ve hangi elemanın ekleneceğini belirtmemizi ister.
    addBox.insertAdjacentHTML("afterend", noteEleman);
  });
}

// * Wrapper kısmındaki tıklanmaları izle

wrapper.addEventListener("click", (e) => {
  // Eğer üç noktaya tıklandıysa
  if (e.target.classList.contains("bx-dots-horizontal-rounded")) {
    // 3 noktanın kapsam elemanına eriş
    const parentElement = e.target.parentElement;

    // parentElement'e show class'ı ekle
    parentElement.classList.add("show");
  }
});
