let ondalıklıSayı = 18.76543456789;

document.write("Sayı:", ondalıklıSayı, "<br/>");

// * toFixed ==> Ondalıklı bir sayıda .'dan sonra kaç basamak olacağını belirlemek için kullanılır.

document.write(
  "Sayı Ondalıklı kısım 2 basamaklı:",
  ondalıklıSayı.toFixed(2),
  "<br/>"
);

// * Math.round ==> Bir ondalıklı  sayıyı en yakın tam sayıya yuvarlamak için kullanılır.

document.write(
  "Sayı en yakın tam sayıya yuvarla:",
  Math.round(ondalıklıSayı),
  "<br/>"
);

// * Math.floor ==> Bir ondalıklı sayıyı en yakın bir alt tam sayıya yuvarlamak için kullanılır.

document.write(
  "Sayı en yakın bir alt tam sayıya yuvarla:",
  Math.floor(12.9),
  "<br/>"
);

// * Math.ceil ==> Bir ondalıklı sayıyı en yakın bir üst tam sayıya yuvarlamak için kullanılır

document.write(
  "Sayı en yakın bir üst tam sayıya yuvarla:",
  Math.ceil(12.1),
  "<br/>"
);

// * Math.random ==> 0-1 arasında rastgele sayılar oluşturmak için kullanılır.

document.write("Rastgele Sayı:", Math.round(Math.random() * 10), "<br/>");

// ! Math.random 0-1 arasında rastgele sayılar  oluşturur.Fakat biz bu aralık dışında sayılar oluştursun istersek bu metodu *10,100,... şeklinde değiştirebiliriz.Bu seferde elde edilen sayılar ondalıklı sayı olduğundan bunu tam sayıya çevirmek isteriz.Ve bunuda Math.round() ile yaparız.

const sayı1 = "22";

document.write("Sayı-1:", typeof sayı1, "<br/>");

// * parseInt() ==> String ifadeyi  sayıya çevirmek için kullanılır.

document.write("Sayı-1:", typeof parseInt(sayı1), "<br/>");

// * toString() ==> String dışındaki ifadeleri string'e çevirmek için kullanılır.

const sayı2 = 22;

document.write("Sayı-2:", typeof sayı2, "<br/>");

document.write("Sayı-2:", typeof toString(sayı2), "<br/>");

// const kişi1 = "Ali";
// const kişi2 = "Altan";
// const kişi3 = "Aynura";
// const kişi4 = "Burak";
// const kişi5 = "Dilek";

// * Javascript Diziler (Array)

// Javascript'de birden fazla veriyi yönetmek için diziler kullanılır.Diziler hem verileri kolay bir şekilde depolamak hemde dizilerin sahip olduğu metotlar sayesinde bu verileri kolayca yönetmemizi sağlar.

// * Bir dizi değişken tanımlarken kullanılan var,let ve const anahtar kelimelerinden biri seçilir.Sonrasında bu diziye bir isim verilir.Verilen isimden sonra = [] konulur ve []  içerisinde dizinin elemanları yazılır.

const öğrenciler = ["Ali", "Altan", "Aynura", "Burak", "Dilek"];

document.write("Öğrenciler:", öğrenciler, "<br/>");

document.write("Birinci öğrenci:", öğrenciler[0], "<br/>");

// ! Dizi içerisindeki elemanlara toplu bir şekilde erişebildiğimiz gibi teker tekerde erişebiliriz.Bunu yaparken dizi adından sonra [] konur ve [] içerisinde erişilmek istenen elemanın sıra numarası yazılır.Fakat bunu  yaparken tam istediğimizi elde edemeyiz.Çünkü diziler içerisindeki elemanları 1,2,3,... şeklinde değil 0,1,2,3,... şeklinde sayar.Bundan dolayı biz 1. elemana erişmek istersek bu dizinin bize göre ikinci elemanı olacaktır.Dizilerin bu sayma şekline index denir.Çözüm olarak ise erişilmek istenen elemanın bir eksik sırası yazılır.

document.write("-----------------------------------", "<br/>");

// todo: Bir adet dizi tanımlayınız.Bu dizinin elemanlarına hem toplu bir şekilde hemde teker teker erişiniz.

let sayilar = [10, 20, 30, 40, 50, "altmış", true];
document.write("Elemanlar: ", sayilar, "<br/>");
document.write("First element:", sayilar[0], "<br/>");
document.write("Second element:", sayilar[1], "<br/>");
document.write("Third element:", sayilar[2], "<br/>");
document.write("Fourth element:", sayilar[3], "<br/>");
document.write("Fifth element:", sayilar[4], "<br/>");

document.write("-----------------------------------", "<br/>");

// * JavaScript Dizi Metotları

let şehirler = ["Malatya", "Ankara", "Antalya", "İzmir", "Konya"];

document.write("Şehirler:", şehirler, "<br/>");

// ! push() ==> Bir dizinin sonuna eleman eklemek için kullanılır.Bu metot () içerisinde diziye eklenecek elemanların yazılmasını ister

şehirler.push("Bursa");

document.write("Şehirler-1:", şehirler, "<br/>");

// ! pop() ==> Bir dizinin son elemanını silmek için kullanılır.

şehirler.pop();

document.write("Şehirler-2:", şehirler, "<br/>");

// ! unshift() ==> Bir dizinin başına eleman eklemek için kullanılır.Bu metot () içerisinde diziye eklenecek elemanların yazılmasını ister

şehirler.unshift("Kahramanmaraş");
şehirler.unshift("Trabzon");

document.write("Şehirler-3:", şehirler, "<br/>");

// ! shift() ==> Bir dizinin başındaki elemanı silmek için kullanılır.

şehirler.shift();

şehirler.push("Malatya");

document.write("Şehirler-4:", şehirler, "<br/>");

// ! slice() ==> Bir dizinin belirli bir bölümünü almak için kullanılır.Bu metot bir başlangıç birde bitiş değeri alır.Başlangıç değeri zorunludur ama bitiş değeri zorunlu değildir.Eğer bitiş değeri verilmezse başlanıç sayısında  dizinin son elemanına kadar alır.

document.write("Şehirler 1-3 arası:", şehirler.slice(0, 3), "<br/>");

// ! length ==> Bir dizinin uzunluğunu ölçmek için kullanılır.

document.write("Şehirler dizisi uzunluğu:", şehirler.length, "<br/>");

// ! indexOf() ==> Bir dizi içerisinde belirtilen elemanın index'ini bulmak için kullanılır.

document.write(
  "Şehirler dizisi içerisinde Malatya:",
  şehirler.indexOf("Malatya"),
  "<br/>"
);

// ! lastIndexOf() ==> Bir dizi içerisinde birden fazla bulunan elemanlardan sonuncusunun indexi'ni almak için kullanılır.

document.write(
  "Şehirler dizisi içerisinde Malatya:",
  şehirler.lastIndexOf("Malatya"),
  "<br/>"
);

// ! reverse() ==> Bir diziyi terse çevirmek için kullanılır.

document.write("Ters Şehirler:", şehirler.reverse(), "<br/>");

// ! concat() ==> İki yada daha fazla diziyi birleştirmek için kullanılır.

const kullanıcılar = ["Ali", "Ezgi", "Buse", "Nur", "Kürşat"];

const arabalar = ["Bmw", "Mercedes", "Audi", "Tesla", "Jaguar"];

document.write(
  "Birleştirilmiş Dizi:",
  şehirler.concat(kullanıcılar, arabalar),
  "<br/>"
);

document.write("-----------------------------------", "<br/>");

// ! join() ==> Bir dizinin elemanlarını belirtilen ayıraçla bölmek için kullanılır.Bu metot diziyi beritilen ayıraçla böler ve geriye tek bir string döndürür.

document.write("Arabalar Dizisi:", arabalar.join(" . "), "<br/>");

// ! splice() ==> Bu metotla bir diziye eleman ekleyebilir,diziden eleman çıkarabilir ve bir dizinin elemanını güncelleyebiliriz.

// * splice ile diziden eleman kaldırma
// Splice bir diziden eleman kaldırırken bu metoda iki adet değer gireriz.Birincisi silme işlemi kaçıncı indexten itibaren gerçekleşecek ikincisi ise bu indexten itibaren kaç eleman silineceğinin sayısıdır

// splice metodu  diziden kaldırılan elemanları geriye bir dizi olarak döndürür.

const silinenArabalar = arabalar.splice(1, 3);

document.write("Arabalar Dizisi-1:", arabalar, "<br/>");

document.write("Silinenler:", silinenArabalar, "<br/>");

// ! Eğer splice metoduna tek değer girilirse sadece bu indexteki elemanı kaldırır.

// * splice ile diziye eleman ekleme

// Splice ile bir diziye eleman eklerken bu metoda hangi indexten itibaren kaç adet eleman ekleneceği ve eklenecek değerler verilir.

arabalar.splice(2, 2, "Ferrari", "Honda");

document.write("Arabalar Dizisi-2:", arabalar, "<br/>");

// * splice ile bir dizinin elemanlarını güncelleme

// Splice metodu ile bir dizinin elemanlarını güncellemek için bu metoda iki adet değer gireriz.Birincisi güncelleme işlemi kaçıncı indexten itibaren gerçekleşecek ikincisi ise bu indexten itibaren kaç eleman güncelleneceğinin sayısıdır.

arabalar.splice(2, 1, "Opel");
arabalar.splice(3, 1, "Bugatti");

document.write("Arabalar Dizisi-3:", arabalar, "<br/>");

arabalar.splice(3, 0, "Lamborghini");

document.write("Arabalar Dizisi-3:", arabalar, "<br/>");

document.write("-----------------------------------", "<br/>");

// ! sort() ==> Bir dizi içerisindeki elemanları sıralamak için kullanılır.

const puanlar = [123, 12, 34, 456, 44, 76, 89, , 56];

document.write("Puanlar:", puanlar, "<br/>");

document.write("Puanlar:", puanlar.sort(), "<br/>");

document.write(
  "Puanlar Büyükten Küçüğe Sıralı:",
  puanlar.sort(function (a, b) {
    return b - a;
  }),
  "<br/>"
);

document.write(
  "Puanlar Küçükten Büyüğe Sıralı:",
  puanlar.sort(function (a, b) {
    return a - b;
  }),
  "<br/>"
);

const katılımcılar = ["Figen", "Ali", "Ayşe", "Fatma", "Dilek"];

document.write("Katılımcılar:", katılımcılar, "<br/>");

document.write("Katılımcılar Sıralı:", katılımcılar.sort(), "<br/>");

document.write(
  "Katılımcılar Sıralı-1:",
  katılımcılar.sort().reverse(),
  "<br/>"
);

// ? sort metodu metin ifadelerde sıralama yaparken bir sıkıntı oluşturmazken sayılarda sıralama yaparken sıkıntı oluştururur.Bunu çözmek için bir fonksiyon yazarız.

// * Bir dizi içerisinde obje kullanımı

const kullanicilar = [
  {
    isim: "Ahmet",
    soyisim: "Arslan",
    yaş: 40,
    meslek: "Frontend Developer",
    puan: 40,
  },
  {
    isim: "Mehmet",
    soyisim: "Yılmaz",
    yaş: 30,
    meslek: "Backend Developer",
    puan: 50,
  },
  {
    isim: "Ayşe",
    soyisim: "Kaya",
    yaş: 25,
    meslek: "UI/UX Designer",
    puan: 70,
  },
  {
    isim: "Fatma",
    soyisim: "Demir",
    yaş: 35,
    meslek: "Project Manager",
    puan: 80,
  },
  {
    isim: "Ali",
    soyisim: "Çelik",
    yaş: 28,
    meslek: "DevOps Engineer",
    puan: 60,
  },
  {
    isim: "Fatma",
    soyisim: "Çelik",
    yaş: 48,
    meslek: "DevOps Engineer",
    puan: 60,
  },
];

console.table(kullanicilar);

// ! find() ==> Bir dizi içerisindeki elemanları bulmak için kullanılır.Bu metot () içerisinde bir elemanı hangi şarta göre bulacağımızı belirtmemizi ister

const bulunanKullanıcı = kullanicilar.find(function (kullanıcı) {
  return kullanıcı.isim == "Fatma";
});

console.log(bulunanKullanıcı);

const bulunanKullanıcı1 = kullanicilar.find(function (kullanıcı) {
  return kullanıcı.meslek == "UI/UX Designer";
});

console.log(bulunanKullanıcı1);

// ! filter() ==> Bir dizi içerisindeki elemanları filtrelemek için kullanılır.Bu metot () içerisinde bir elemanı hangi şarta göre filtreleyeceğimizi belirtmemizi ister.

const puanlıKullanıcı = kullanicilar.filter(function (a) {
  return a.puan > 65;
});

console.log(puanlıKullanıcı);

// * Javascript Objeler

// Objeler içerisinde key(anahtar)-value(değer) çiftleri halinde verileri tutan yapılardır.Obje içerisinde funcition ve arraylerde tanımalanabilir.

// Bir obje tanımlanırken var,let ve const anahtar kelimesinden biri seçilir sonrasıda objeye bir isim verilir.Verilen bu isim sonrasında ={} konulur ve {} içerisinde değer çiftleri yazılır.

const öğrenci = {
  isim: "Özgür",
  soyisim: "Kaya",
  yaş: 30,
  hobiler: ["Yazılım", "Spor", "Müzik", "Kitap"],
  tanıtım: function () {
    document.write("Javascript dersinden selamlar", "<br/>");
  },
  adres: {
    ülke: "Türkiye",
    şehir: "İstanbul",
    postaKodu: "34123",
    semt: "Başakşehir",
  },
};

// console.log(öğrenci);
// console.log(öğrenci.isim);
// console.log(öğrenci.soyisim);
// console.log(öğrenci.yaş);
// console.log(öğrenci.hobiler);
// console.log(öğrenci.hobiler[0]);

öğrenci.tanıtım();

// todo: Bir obje tanımlayınız.Bu obje içerisinde bir string,bir number,bir boolean,bir dizi birde fonksiyon yer alsın.Fonksiyon dışındaki değerlere erişiniz fonksiyonuda çalıştırınız.

const hayvan = {
  isim: "Tekir",
  cins: "kedi",
  yaş: 2,
  evcilHayvanMı: true,
  renk: ["siyah", "gri", "beyaz"],
  tanıt: function () {
    document.write("Kedi adı:", this.isim, " Kedi cins:", this.cins, "<br/>");
  },
};

hayvan.tanıt();

document.write("-----------------------------------", "<br/>");

// * Javascript Templates Literal (Backtick)

// Javascript'de değişken ve metin ifadelerin bir arada kullanımı yazım açısından bizi zorlar.Bunu çözmek için ES6(Javascript'in en güncel sürümü) ile birlikte gelen templates literal kullanılır.Bu yapı (``) içerisinde hem değişkenler hemde string ifadeler daha kolay bir şekilde kullanılır.String ifadeleri direkt yazıp değişkenleri ise ${} içerisinde yazarız.

const kurumAdı = "Udemig";
const konu = "Javascript";
const dersNo = 2;

document.write(
  "Selamlar,Piyasanın en iyi yazılım akademisi ",
  kurumAdı,
  " de ",
  konu,
  " derslerine devam ediyoruz.Bu bizim ",
  dersNo,
  " dersimiz",
  "<br/>",
  "<br/>"
);

document.write(
  `Selamlar,Piyasanın en iyi yazılım akademisi ${kurumAdı} de ${konu} derslerine devam ediyoruz.Bu bizim ${dersNo} dersimiz <br/>`
);

// * Javascript Arrow Functions

// ES6 ile birlikte gelen bu yapı modern fonksiyon  tanımlama yöntemidir.Bir arrow function tanımlarken var,let ve const anahtar kelimelerinden biri seçilir sonrasında fonksiyona bir isim verilir.Verilen bu ismin devamında =()=>{} oluşturulur.Buradaki {} içerisinde fonksiyonun yapacağı işlev yazılır.

// function çıktıVer() {
//   document.write(`Selamlar Dünya`);
// }

// çıktıVer();

const çıktıVer = () => {
  document.write(`Selamlar Dünya <br/>`);
};

çıktıVer();

// Arrow Functionlarda parametre kullanımı

const toplamaİşlemi = (a, b) => {
  document.write(`Toplam: ${a + b}<br/>`);
};

toplamaİşlemi(3, 4);

// const stokToplam = (s1, s2) => {
//   let toplam = s1 + s2;

//   return toplam;
// };

const stokToplam = (s1, s2) => s1 + s2;

document.write(`ToplamStok: ${stokToplam(34, 55)}<br/>`);

const arabalarDizisi = [
  {
    id: 1,
    marka: "Bmw",
    model: "M3",
    renkler: ["siyah", "beyaz", "mavi", "kırmızı"],
  },
  {
    id: 2,
    marka: "Mercedes",
    model: "C200",
    renkler: ["gri", "siyah", "beyaz", "yeşil"],
  },
  {
    id: 3,
    marka: "Audi",
    model: "A6",
    renkler: ["beyaz", "siyah", "lacivert", "turuncu"],
  },
  {
    id: 4,
    marka: "Toyota",
    model: "Corolla",
    renkler: ["kırmızı", "beyaz", "mavi", "gri"],
  },
  {
    id: 5,
    marka: "Tesla",
    model: "Model 3",
    renkler: ["siyah", "beyaz", "kırmızı", "gümüş"],
  },
];

// const idliAraba = arabalarDizisi.find(function (araba) {
//   return araba.id == 5;
// });

const idliAraba = arabalarDizisi.find((araba) => araba.id == 5);

console.log(idliAraba);

// todo: Kendisine parametre olarak verilen 3 adet sayının çarpımını ekrana yazdıran bir fonksiyonu arrow function ile oluşturunuz.

const çarp = (s1, s2, s3) => s1 * s2 * s3;

document.write(`Çarpım: ${çarp(3, 4, 5)} <br/>`);
