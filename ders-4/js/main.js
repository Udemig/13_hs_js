// Imports
import { users, kullanıcıAdres } from "./helpers.js";
import { selamla, toplama } from "./functions.js";
import { Araba } from "./user.js";
import mesaj from "./ui.js";

// * Javascript Date Objesi (Tarih Objesi)

// Javascript içerisinde yer alan date objesi ile güncel tarih verisine erişibiliriz.

const date = new Date();

document.write(`Tarih: ${date} <br/>`);

// ! getDate ==> Javascript date objesi içerisinden gün verisini almak için kullanılır.
document.write(`Gün: ${date.getDate()} <br/>`);

// ! getMonth ==> Javascript date objesi içerisinden ay verisini almak için kullanılır.
document.write(`Ay: ${date.getMonth() + 1} <br/>`);

// ! getFullYear ==> Javascript date objesi içerisinden yıl verisini almak için kullanılır.
document.write(`Yıl: ${date.getFullYear()} <br/>`);

// ! getDay ==> Javascript date objesi içerisinden o günün haftanın kaçıncı günü olduğunu  almak için kullanılır.
document.write(`Haftanın Kaçıncı günü: ${date.getDay()} <br/>`);

// ! getHours ==> Javascript date objesi içerisinden saat verisini almak için kullanılır.
document.write(`Saat: ${date.getHours()} <br/>`);

// ! getMinutes ==> Javascript date objesi içerisinden dakika verisini almak için kullanılır.
document.write(`Dakika: ${date.getMinutes()} <br/>`);

// ! getSeconds ==> Javascript date objesi içerisinden saniye verisini almak için kullanılır.
document.write(`Saniye: ${date.getSeconds()} <br/>`);

// ! getTime ==> Javascript date objesi içerisinden 1970'den günümüze geçen milisaniyeyi almak için kullanılır.

document.write(`1970--: ${date.getTime()} <br/>`);

// ! toLocaleDateString ==> Belirtilen konuma göre tarih verisini formatlamak için kullanılır

document.write(
  `Format Date: ${date.toLocaleDateString("tr-Tr", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  })} <br/>`
);
document.write(`--------------------------------- <br/>`);

// * Api

// Bir websitesindeki veriler server adı verilen makinalarda tutulur.Buradaki verilere erişmemiz sağlayan yapıya ise api denir.Api bizim  serverdaki veriye erişmemiz sağlar.Verilere erişmek içinse `fetch()` metodu kullanılır.Bu metot bizim verilere erişmemiz sağlar.fetch metodu kullanılırken () içerisinde erişilmek istenen api'ın url'i bulunur.

// ? Api'ın yapısı

// Bir api temelde iki ana kısımdan oluşur.Bunlar baseUrl ve endpoint'lerdir.endpointler farklı verileri tutmak için oluşturulan yapılardır.BaseUrl ise api'daki tüm endpointleri bir arada tutan kapsayıcıdır.

// Örneğin hepsi burada sitesini düşünelim.Burada farklı farklı kategoride ürünler bulunur.Kadın Giyim,Erkek Giyim,Ev Aletleri,... Her kategori için ayrı bir endpoint bulunur.Endpoint ile istenilen kategoriye erişilir.

// Beyaz Eşya ==> https://www.hepsiburada.com/beyaz-esya-ankastreler

// Bilgisayar ==> https://www.hepsiburada.com/bilgisayarlar

// Yukarıdaki iki url'de gözüktüğü üzere ortak yapı  https://www.hepsiburada.com/ ve bu kısım baseUrl'dir.Bu yapı tüm endpointleri bir arada tutar.

// beyaz-esya-ankastreler && bilgisayarlar kısımları ise endpointlerdir.Bu kısımlar farklı veriler için özelleştirilmiş yan dallardır.

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await response.json();

  console.log(data);
};

// Api'dan verileri alırken javascriptdeki sekron kod ilerleyişi istediğimiz veriye erişmemiz noktasında bizi engeller.Bunu çözmek için promise yapısı ve async-await kullanılır.

// * Async-Await

// Asekron bir kod bloğu elde etmek için asekron çalışması istenen kısıma await yazılır.Bu kod bloğunun başına ise async yazılır.

// getData();

// * Javascript Promise Yapısı

// Javascript'de asekron yapı için kullanılan bir diğer yapı ise promise'dır.Bu yapı bir işlevi tetikledikten sonra başka bir işlevin çalışmasını sağlamak için kullanılır.

const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// getUsers();

// * JSON

//  Json verileri depolamak ve yapılandırmak için kullanılan bir veri formatıdır.Bu yapı hem developerlar hemde makinalar arasında veri alışverişini mümkün kılar.

// Js nesnelerine benzeyen bu yapı js nesnesinden farklı olarak key değerlerinin başına "" konulması ile oluşturulur.

// Js'deki tüm veri tipleri burada da mevcuttur.

const jsonData = '{"ad":"Yusuf ","soyad":"YAMAN","yaş":23}'; // Json
const kişi = { ad: "Yusuf", soyad: "YAMAN", yaş: 23 }; // Js

// Json verisini js nesnesine çevir

// ! JSON.parse() ==> () içerisinde verilen datayı json'dan js nesnesine çevirmek için kullanılır.

const jsNesnesi = JSON.parse(jsonData);

// console.log("JSON", jsonData);

// console.log("JS", jsNesnesi);

// ! JSON.stringify() ==> () içerisinde verilen js nesnesini json formatına dönüştürmek için kullanılır.

const adres = {
  ülke: "Türkiye",
  şehir: "Malatya",
  ilçe: "Battalgazi",
};
const Json = JSON.stringify(adres);

// console.log(Json);

const getAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
};

// getAllProducts();

const getProduct = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

// getProduct(3);
// getProduct(1);
// getProduct(2);

// todo: Fake store api'dan belirli bir kategoriye ait ürünleri alan bir fonksiyon yazınız.Bu fonksiyon her seferinde belirtilen farklı kategorideki ürünleri dinamik olarak alsın.

const getCategory = (category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// getCategory("electronics");
// getCategory("men's clothing");
// getCategory("jewelery");

// * Javascript Class Yapısı

// Class yapısı 'class' anahtar kelimesi ile yapılır.Bu anahtar kelime sonrasında Class yapısına bir isim verilir devamında {} oluşturulur.Class  içerisindeki yapılara erişirken bunu classın örneğini alarak yaparız.
class Kişi {
  // Kurucu metot
  constructor(ülke) {
    this.isim = "Evrim";
    this.soyisim = "Çay";
    this.yaş = 28;
    this.hobi = ["Yazılım", "Spor", "Kitap Okuma", "Fotoğraf"];
    this.ülke = ülke;
  }
  // Class yapısı içerisinde fonksiyon tanımlama
  kişiTanıtım() {
    document.write(
      `Öğrenci adı: ${this.isim} <br/> Öğrenci soyisim: ${this.soyisim} <br/> Öğrenci yaş: ${this.yaş} <br/> `
    );
  }
}

// Class yapısının örneğini alma
const öğrenci = new Kişi("İngiltere");

// console.log(öğrenci.isim);
// console.log(öğrenci.soyisim);

öğrenci.kişiTanıtım();

// console.log(öğrenci.ülke);

// todo: Hayvan adında bir class yapısı oluşturunuz.Bu class yapısı içerisinde yapılar tanımlayınız.Birde fonksiyon oluşturunuz.

class Hayvan {
  constructor() {
    this.isim = "Luna";
    this.cins = "Kedi";
    this.yas = 2;
  }
  sesCikar() {
    console.log(`${this.isim} miyavlıyor!`);
  }
}
const kedi = new Hayvan();
// console.log(`Adı: ${kedi.isim}, Cinsi: ${kedi.cins}, Yaşı: ${kedi.yas}`);
// kedi.sesCikar();

class Kedi {
  constructor() {
    this.türü = "Kedi";
    this.adi = "Kitkat";
    this.yas = 1;
  }
  hayvanBilgi() {
    document.write("Hayvan adi: ${this.adi} <br/>");
  }
}

const kedi1 = new Kedi();

// console.log(kedi1);

document.write(`--------------------------------- <br/>`);

// * setTimeout && setInterval

// Bu metotlar javascript'de zamana bağlı işlemler yapmak için kullanılır.

// ! setTimeout metodu belirli bir zaman geçtikten sonra bir işlem tetiklemek için kullanılır.Bu metot () içerisinde bir callback fun. ve bir süre belirteci ister.Belirtilen süre milisaniye cinsindendir.

// setTimeout(() => {
//   document.write(`Udemig akademiden selamlar <br/>`);
// }, 1000);

// ! setInterval metodu belirli zaman aralığında bir işlem tetiklemek için kullanılır.Bu metot bizden bir callback fun. birde süre belirteci ister.Belirtilen süre aralığında bir işlem tetikler

// setInterval(() => {
//   document.write(`Javascript dersinden selamlarrrr <br/>`);
// }, 4000);

// * Javascript Moduler Dosya Yönetimi

// Javascript'de projemizi tek javascript dosyası ile yönetmek bizim için zor olacaktır.Bunu javascript modüler dosya yönetimi ile daha kolay hale getirebiliriz.Modüler dosya yönetimi sırasında yapılması gerekenler.

// 1-) Bir tane ana javascript dosyası seçilir.Bunu html kısmında script etiketiyle bağlarken type'ı module olarak belirtilir.(type='module' olan dosyada document.write komutu çalışmayacaktır.)Bunun sebebi render sürecinin bozması,asekron işlemlerde uyumsuzluk,performans sorunları

// 2-) Ana javascript dosyası haricinde yardımcı javascript dosyaları oluşturulur.Bu dosya içerisinde function,object,array,class,variables,... oluşturulur.Ve diğer dosyalarda kullanılır.Bu kullanım için bir dosyada tanımlanan yapılar ilk olarak export ile dosya dışarına çıkarılır.Sonrasında ise istenen yerde import ile istenilen dosyaya dahil edilir.

// ! Export-İmport Ekstra

// Export-İmport yapılırken bunu {} içerisinde yapmamızın sebebi bir dosya içerisinde birden fazla yapının dosya dışarısına çıkarılmasıdır.Fakat bazen tek bir dosyadan tek bir yapıyı dosya dışarısına çıkarmak isteyebiliriz.Bunu için klasik export-import yerine export default kullanılır.Bu sayede tek dosyadan tek bir yapı export edilir.Tabi bu yöntem ile dosya dışarısına çıkarılan yapının import kısımı değişecektir.

console.log(users);

toplama(12, 44);

console.log(kullanıcıAdres);

selamla();

const araba = new Araba();

console.log(araba);

console.log(mesaj);
