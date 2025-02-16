// * Javascript Dom Manipülasyonları

// Javascript'de arayüzdeki dinamik olayların DOM (Document Object Model) ile yaparız.Bir elemana DOM ile manipülasyon yapabilmemiz için ilk olarak bunu Js kısmına çekmeliyiz sonrasında ise bununla işlemler yapabiliriz.

// Html'den Js kısmına eleman çekmek için kullanılan yöntemler:

// 1-) document.getElementsByTagName(): Html kısmındaki elemanları  tag (etiket) adına göre Js kısmına çekeriz.Bu metot erişilen elemanları bir dizi şeklinde döndürür.
const title1 = document.getElementsByTagName("h1");

// console.log(title1);

// 2-) document.getElementsByClassName(); Html kısmındaki elemanları  class adına göre Js kısmına çekeriz.Bu metot erişilen elemanları bir dizi şeklinde döndürür.

const title2 = document.getElementsByClassName("title2");

// console.log(title2);

// 3-) document.getElementById(): Html kısmındaki elemanları  idsine göre Js kısmına çekeriz

const title3 = document.getElementById("title3");

// console.log(title3);

// 4-) document.querySelector(): Bu metot şimdiye kadar gördüğümüz  getElementsByTagName,getElementsByClassName,getElementById metotlarının işlevini tek başına üstlenir.Fakat bu metot kendisine bir elemanı html kısmında alması istendiğinde bunun class mı id mi olduğunu söylememizi ister.Aksi halde istenilen elemanı bulamaz.

const title4 = document.querySelector(".title4");

// console.log(title4);

// 5-) document.querySelectorAll():  document.querySelector metodu belirtilen özellikteki (class veya id) elemanlardan birden fazla olursa bunlardan ilk bulduğunu alır.Ama biz tüm elemanları almak istersek bunu  document.querySelectorAll metodu ile yaparız.Bu metot erişilen elemanları bir dizi şeklinde döndürür.

const title5 = document.querySelectorAll("#title5");

// console.log(title5);

// Still Özellikleri Ekleme

// title1[0].style.backgroundColor = "red";
// title1[0].style.fontSize = "50px";
// title1[0].style.padding = "20px";

// Still özelliklerini js dosyasında yazmak yerine bunu css'de bir class adı altında toplar ve bu classı dinamik olarak bu elemana ekleriz

// !  Bir elemana class eklemek için classList.add kullanılır.
title1[0].classList.add("başlık");

// title5[0].style.fontSize = "60px";
title5[0].classList.add("başlık5");

// title4.style.backgroundColor = "#690B22";
// title4.style.padding = "20px";
// title4.style.fontSize = "60px";

// ! Bir elemana class ataması yapmak için className kullanılır.
title4.className = "başlık4";

// ! Bir elemanın sınıfını çıkarmak için classList.remove kullanılır.

title5[0].classList.remove("başlık5");

// ! Bir elemana belirtilen class yoksa bunu ekler varsa bunu kaldırır.

const addClassBtn = document.querySelector(".add-class");

const exampleText = document.querySelector("#text");

// todo: addClassBtn e tıklanınca exampleText elemanına text classı ekleyip çıkar

addClassBtn.addEventListener("click", () => {
  exampleText.classList.toggle("text");
});

// * Html kısmındaki elemanların content'ini belirleme

// ? innerText: Bir elemanın yazı içeriğini güncellemek için kullanılır.

title1[0].innerText = "Javascript dersinden selamlar";

// ? innerHtml: Bir elemanın html içeriğini güncellemek için  kullanılır.

title5[1].innerHTML = '<img src="https://picsum.photos/200"/>';

// ? textContent: Bir elemanın yazı içeriğini güncellemek için kullanılır.

title5[0].textContent = "Udemig akademiden selamlar";

title5[0].className = "başlık6";

// * Olay İzleyicileri

// Olay izleyicileri sayesinde htmldeki elemanlara tıklanma,sürüklenme,formun gönderilmesi,mause'un eleman üzerine gelip gitmesi gibi tetikleyiciler sayesinde bir işlemi çalıştırabiliriz.

// Bir olay izleyicisi addEventListener ile eklenir.Bu metot bizden iki şey ister.Birincisi hangi olayın izleneceği ikincisi bu olay gerçekleşince ne yapılması gerektiği.

// Ör: req-btn'e tıklayınca bir uyarı ver

// i-) Bu elemanı js kısmına çek
const reqBtn = document.querySelector(".req-btn");

// ii-) Bu elemana bir olay izleyicisi ekle

reqBtn.addEventListener("click", () => {
  alert("Api'a istek atıldı");
});

// Ör: example-text in mouse durumuna göre çıktı ver

const exampleBtn = document.querySelector(".example-btn");

const dragBtn = document.querySelector("#drag-btn ");

dragBtn.addEventListener("dragstart", () => {
  console.log("Sürükleme işlemi başladı");
});

dragBtn.addEventListener("drag", (e) => {
  console.log(e);
});

dragBtn.addEventListener("dragend", (e) => {
  console.log("Sürükleme işlemi bitti");
});

// Formun gönderilmesini izle

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
  // Sayfa yenilemesini engelle
  e.preventDefault();
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log(e.target[2].value);
});

// todo: Bir tane buton oluşturunuz.Bu butona tıklanınca dark-light mode özelliğini çalışsın.

const button = document.querySelector(".button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Örnek: Bir butona tıklanınca bir div içerisine yeni divler ekle

// 1-) Elemanları js kısmına çek

const createBtn = document.querySelector(".create-btn");

const container = document.querySelector(".container");

// 2-) Butona tıklan olayını izle

createBtn.addEventListener("click", () => {
  // * Yeni bir div oluştur
  // ! Js'de bir html elemanı oluşturmak için document.createElement metodu kullanılır.
  const newDiv = document.createElement("div");

  // * Oluşturulan bu div'in  içeriğini belirle
  newDiv.innerHTML = `
  <h1>Yeni Div</h1>

  <button id='remove-btn'> <i class="fa-solid fa-trash"></i></button>
  `;

  //  Sil butonuna eriş

  newDiv.querySelector("#remove-btn").addEventListener("click", () => {
    // ! Bir elemanı  Html'den kaldırmak için remove kullanılır.
    newDiv.remove();
  });

  // *  Oluşturulan bu div'e class ata

  newDiv.classList.add("new");

  // * Oluşturulan,içeriği belirlenen ve class atanan elemanı Html kısmına aktar
  // ! Bir html yapısının içerisine bir eleman eklemek için appendChild metodu kullanılır. appendChild

  container.appendChild(newDiv);
});

// * Object.defineProperties

// Bu yapı javascript'de bir nesneye birden fazla özellik tanımlamamıza olanak sağlar.

/*

value: Özelliğin değeri

writable: Değerin değiştirilebilirliği [true//false]

enumerable: Değerin döngülerde görünebilirliği [true//false]

configurable: Özelliğin tanımının değiştirilebilirliği [true//false]

get: Değer alma

set: Değer atama


*/

const kişi = {};

Object.defineProperties(kişi, {
  isim: {
    value: "Yusuf",
    writable: true, // değiştirilebilir
  },
  yaş: {
    value: 23,
    writable: false, // değiştirilemez
  },
  _soyisim: {
    value: "Karaca",
    writable: true,
  },
});

console.log(kişi.isim);
console.log(kişi.yaş);

kişi.isim = "Dilek";
kişi.yaş = 45;

console.log(kişi.isim);
console.log(kişi.yaş);

console.log(kişi);

const öğrenci = {};

Object.defineProperties(öğrenci, {
  _yaş: {
    value: 0,
    writable: true,
  },
  yaş: {
    get() {
      return _yaş;
    },
    set(yeniYaş) {
      if (yeniYaş >= 18) {
        _yaş = yeniYaş;
      } else {
        console.log("18 yaşından küçük olamaz.");
      }
    },
  },
});

öğrenci.yaş = 18;

console.log(öğrenci.yaş);

öğrenci.yaş = 17;

console.log(öğrenci.yaş);

// * Javascript Call & Bind & Apply

// Javascript'de call & bind & apply ile bir objeye ait özellikleri başka objelerde kullanabiliriz.

// call: Bu yapı sayesinde bağlam belirterek bir objeye ait özellikleri başka bir objede kullanabiliriz.

const kişi1 = {
  name: "Figen ",
  surname: "Semur",
  tanıtım: function (age, gender) {
    document.write(
      `Kişi adı: ${this.name} <br/> 
       Kişi soyad: ${this.surname} <br/>
       Kişi yaş: ${age} <br/>
       Kişi cinsiyet: ${gender} <br/>
       <br/><br/>
       `
    );
  },
};

const kişi2 = {
  name: "Evrim",
  surname: "Çay",
};

// kişi2  içerisinde yer almayan tanıtım fonksiyonunu sanki varmış gibi kullandık

kişi1.tanıtım.call(kişi2, 25, "Kadın");

// apply: call ile aynı işlevi sağlar.Farklı kısım ise apply dışarıdan verilecek argümanları bir dizi şeklinde ister.

const kişi3 = {
  name: "Enes",
  surname: "Arısoy",
};

kişi1.tanıtım.apply(kişi3, [35, "Erkek"]);

// bind: Bu metotda bizim için bir objede olmayan bir özelliği bağlam belirterek kullanmamızı sağlar.Bu yapı argümanlarını call gibi teker teker alır.Farklı kısım ise kullanılmak istenen özelliği doğrudan değil bir değişkene atayarak kullanılmasıdır.

const kişi4 = {
  name: "Hüseyin ",
  surname: "Kır",
};

const tanıtımÇalıştır = kişi1.tanıtım.bind(kişi4, 35, "Erkek");

tanıtımÇalıştır();

// todo: Bir öğrenci objesi tanımlayınız.Bu obje öğrenciyi öğrenciTanıtım adlı metot ile tanıtsın.Sonra başka objeler oluşturunuz.Bu objeler öğrenciTanıtım adındaki metodu call,bind.apply ile alıp kullansın.

const ogrenci = {
  ad: "Ali",
  soyad: "Yılmaz",
  yas: 20,
  bilgileriGoster: function (sehir, ulke) {
    console.log(`${this.ad}, ${this.yas} yaşında. Konum: ${sehir}, ${ulke}`);
  },
};
ogrenci.bilgileriGoster.call(ogrenci, "İstanbul", "Türkiye");
const ogrenci2 = {
  ad: "Veli",
  soyad: "Kaya",
  yas: 19,
};
ogrenci.bilgileriGoster.apply(ogrenci, ["Izmir", "Türkiye"]);
const ogrenci3 = {
  ad: "Ekim",
  soyad: "Kaya",
  yas: 30,
};
const bilgi = ogrenci.bilgileriGoster.bind(ogrenci3, "Ankara", "Türkiye");
bilgi();
