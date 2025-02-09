// * Javascript Değişkenler

// Değişkenler değeri değişen ifadeleri yönetmek için kullanılan yapılardır.Bu yapılar sayesinde program içerisinde verileri kolayca yönetiriz.

document.write("Selamlar Yusuf", "<br/>");
document.write("Selamlar Sara", "<br/>");

// Bir program içerisinde değişken kullanılırken yapılması gereken 3 adım bulunmaktadır.

// i-) Değişken tanımlanması

// ii-) Değişkene değer atanması

//  iii-) Değişken program içerisinde kullanılması

// ! 1-) Değişkenin Tanımlanması:

// Bir değişken tanımlarken var,let ve const anahtar kelimelerinden biri seçilir.Bu anahtar kelimelerinden biri seçildikten sonra değişkene bir isim verilir. Bu şekilde bir değişken tanımlanmış olur.Değişken isimlendirmesi yapılırken dikkat edilmesi gereken bazı hususlar bulunmaktadır.

// a-) Javascript içerisinde bulunan bazı özel kelimeler değişken adı olarak kullanılamaz.[array,object,string,boolean,class,...]

// b-) Değişken isimlendirmesi yapılırken content ile ilintili isim seçilmesine dikkat edilmelidir.

// c-) Birden fazla kelimeden oluşan bir değişken adında kelimeler arasında boşluk bırakılmaz.Eğer birden fazla kelimeden oluşan bir değişken isimlendirmesi yapılacaksa bunu camelCase[userName],pascalCase[UserName],snakeCase[user_name],kebabCase[user-name] metotlarından istenilen yapı ile oluştururuz.

// ! 2-) Değişkene Değer Atanması:

// Bir değişkene değer ataması yapılırken değişken adından sonra '=' konulup bu işaretin sağında değişkene değer ataması yapılır.

// ! 3-) Değişkenin program içerisinde kullanılması

// İstenilen değişken program içerisinde kullanılır.

var userName = "Saadet";

document.write("Kullanıcı Adı:", userName, "<br/>");

let sınıfMevcudu = 20;

document.write("Mevcut:", sınıfMevcudu, "<br/>");

const lessonSubject = "Javascript";

document.write("Konu:", lessonSubject, "<br/>");

// ? Neden 3 adet değişken tanımlama yöntemi bulunuyor?

// var ile değişken tanımlanması güncel projelerde tercih edilmez.Bunun sebebi var ile tanımlanan değişkenlerin yeniden tanımlanabilmesidir.Bu durum proje içerisinde güvenlik açıklarına sebep olur.Bundan ötürü js'in yeni sürümüyle birlikte var yerini  let ve const'a bırakmıştır.

var ülke = "Türkiye";

document.write("Ülke:", ülke, "<br/>");

var ülke = "Amerika";

document.write("Ülke:", ülke, "<br/>");

let marka = "Apple";

document.write("Marka:", marka, "<br/>");

// let marka = "Samsung"; marka halihazırda tanımlandığından hata verir.

const model = "M2";

document.write("Model:", model, "<br/>");

// const model = "M3"; model halihazırda tanımlandığından hata verir.

// ? let ve const arasındaki fark nedir ?

// let ve const arasındaki fark, let ile tanımlanan değişkenlerin değerleri değiştirilebilirken const ile tanımlanan değişkenlerin değerleri değiştirilemezdir.

let arabaModel = "M3";

document.write("Model:", arabaModel, "<br/>");

arabaModel = "M2";

document.write("Model:", arabaModel, "<br/>");

const şehir = "Malatya";

document.write("Şehir:", şehir, "<br/>");

// şehir = "İstanbul"; const ile tanımlanan değişkenlerin değeri sabittir doğrudan değiştirilemez.

document.write("Şehir:", şehir, "<br/>");

/* 
! Özetle

Bir değişken oluşturulurken güncel projelerde var kullanılmaz.

Güncel projelerde değişken oluşturulurken eğer içeriği güncellenecek bir değişken oluşturmanız gerekiyorsa let; sabit bir değişken oluşturmanız gerekiyorsa const kullanılır.


*/

// * Javascript Veri Tipleri

// Javascript'de yer alan tüm yapıların birer veri tipi bulunmaktadır.
// string,number,boolean,object,null,array,...

// * String: Javascript'de metin ifadelerin veri tipi 'string'dir.String değere sahip değişkenlere atama yapılırken bunu "" içerisinde yaparız.

let mesaj = "Udemig akademiden selamlar";

// * Number: Javascript'deki sayıların veri tipleri 'number'dır.Değeri sayı olan değişkenlere atama yapılırken ilgili değer direkt olarak yazılır."" kullanılmaz.

let yaş = 22;

// typeof ==> Bu metot javascriptdeki ifadelerin veri tipini kontrol eder.

document.write("Mesaj değişkeninin veri tipi:", typeof mesaj, "<br/>");

document.write("Yaş değişkeninin veri tipi:", typeof yaş, "<br/>");

let numara = "243";

document.write("Numara değişkeninin veri tipi:", typeof numara, "<br/>");

// ! Eğer bir sayı "" içerisinde tanımlanırsa bunun veri tipi string olur.

// * Boolean: True yada false değerlere sahip ifadelerin veri tipi boolean'dır.

let yöneticiMi = true;

document.write(
  "Yönetici Mi değişkeninin veri tipi:",
  typeof yöneticiMi,
  "<br/>"
);

// * Undefined: İçeriği belirlenmeyen yani herhangi bir değer ataması yapılmayan ifadelerin veri tipi undefined'dur.

let kurumAdı;

document.write("Kurum Adı değişkeninin veri tipi:", typeof kurumAdı, "<br/>");

// * Null: İçeriği boş bir değer olan ifadelerin veri tipi null'dur.

let dükkanAdı = null;

document.write("Kurum Adı değişkeninin veri tipi:", typeof dükkanAdı, "<br/>");

// Null ve Undefined Farkı:

// undefined içeriği yok demektir.Ama null developer tarafından bilinçli şekilde atanır.

document.write("---------------------------------------------------", "<br/>");

// * Javascript Aritmetik Operatörler

let sayı1 = 44;
let sayı2 = 25;

// Toplama (+):

document.write("Toplam:", sayı1 + sayı2, "<br/>");

// Çıkarma (-):

document.write("Çıkarma:", sayı1 - sayı2, "<br/>");

// Çarpma (*):

document.write("Çarpma:", sayı1 * sayı2, "<br/>");

// Bölme (/):

document.write("Bölme:", sayı1 / sayı2, "<br/>");

// Mod Alma (%): Bir sayının bir sayıya bölümünden kalan değeri bulma işlemine mod alma denir.

document.write("Bölme:", sayı1 % sayı2, "<br/>");

// ! Bonus:

let sayı3 = 87;
let sayı4 = "12";

document.write("Toplama-Bonus:", sayı3 + sayı4, "<br/>");

// Javascript'de '+' işareti iki görev üstlenir.

// i-) Eğer sağında ve solundaki ifadeler aynı cins ve sayıysa ise bunları toplar

// ii-) Eğer sağında ve solundaki ifadeler aynı cins değilse bunları birleştirir.

const kullanıcıSayısı = 81;

document.write(
  "Uygulamadaki aktif kullanıcı sayısı:" + kullanıcıSayısı + "<br/>"
);

document.write("---------------------------------------------------", "<br/>");

let sayi = 44;

document.write("Sayi:", sayi, "<br/>");

sayi = sayi + 1;

document.write("Sayi-1:", sayi, "<br/>");

sayi = sayi * 5;

document.write("Sayi-1:", sayi, "<br/>");

sayi = sayi - 20;

document.write("Sayi-1:", sayi, "<br/>");

// todo: Bir sayı adet değişkeni oluşturunuz.Bu değişkenle toplama,çıkarma,çarpma ve mod işlemleri yapınız.Elde edilen sonuçları ekrana yazdırınız

document.write("---------------------------------------------------", "<br/>");

// * Javascript Karşılaştırma Operatörleri
let sayi1 = 65;
let sayi2 = 24;

// Küçüktür (<)

document.write("sayi1 sayi2'den küçük mü ? :", sayi1 < sayi2, "<br/>");

// Büyüktür (>)

document.write("sayi1 sayi2'den büyük mü ? :", sayi1 > sayi2, "<br/>");

// Eşittir (==)

document.write("sayi1 sayi2'ye eşit mi ? :", sayi1 == sayi2, "<br/>");

// Küçükeşittir (<=)

document.write("sayi1 sayi2'den küçük eşit mi ? :", sayi1 <= sayi2, "<br/>");

// Büyükeşittir (>=)

document.write("sayi1 sayi2'den büyük eşit mi ? :", sayi1 >= sayi2, "<br/>");

const sayi4 = 45;
const sayi5 = "45";

document.write("Sayılar Eşit Mi ? :", sayi4 == sayi5, "<br/>"); // Sayılar eşit mi ? [Sadece değer kontrolü yapılır]

// Denktir (===)

document.write("Sayılar Denk Mi ? :", sayi4 === sayi5, "<br/>"); // sayılar denk mi [ Hem değer hem veri tipi kontrolü yapılır]

document.write("---------------------------------------", "<br/>");

// * Ve (&&) ve Veya (||)

document.write("Ve:" + "<br/>");

document.write((true && true) + "<br/>");

document.write((true && false) + "<br/>");

document.write((false && false) + "<br/>");

document.write("Veya:" + "<br/>");

document.write((true || true) + "<br/>");

document.write((true || false) + "<br/>");

document.write((false || false) + "<br/>");

document.write("---------------------------------------", "<br/>");

// * Javascript Fonksiyonlar

// Javascript fonksiyonları bir işlevi gerçekleştirmek için özelleştirilmiş kod parçacıklarıdır.Bir fonksiyonun işlevini yerine getirmesi için önce tanımlanması sonrasında çağırılması gerekir.

// Bir fonksiyon tanımlanırken ilk olarak 'function' anahtar kelimesi kullanılır.Sonrasında  fonksiyona bir isim verilir.Bu isimden sonra (){} açılır.Buradaki {} içerisinde fonksiyonun yapması gereken işlev kodlanır.

function selamla() {
  document.write(
    "Udemig akademinin kaliteli eğitimleriyle yazılım öğreniyoruz.Sıradaki hedef Javascript ⚡️ " +
      "<br/>"
  );
}

selamla();

function topla() {
  let sayı1 = 45;
  let sayı2 = 67;

  let toplam = sayı1 + sayı2;

  document.write("Toplam:", toplam, "<br/>");
}

topla();
// topla();
// topla();
// topla();

// Şuana kadar oluştuduğumuz fonksiyonlar bizim için statik çıktılar verdi.Peki bunları nasıl dinamik hale getiririz ??

// * Fonksiyonlar'da Parametre kullanımı

// Bir fonksiyonun parametre ile dinamik işlem yapabilmesi için ilk olarak bu fonksiyona bir parametre geçilmeli sonrasında bu paramtre ile dinamik işlemler yapılmalıdır.Bir fonksiyona parametre fonksiyon adının yanındaki () içerisinde geçilir.

function dinamikToplama(a, b) {
  let toplam = a + b;

  document.write("Dinamik Toplam:", toplam, "<br/>");
}

// dinamikToplama(); Parametreli bu fonksiyon toplam sonucunu kendisine verilen a ve b değerleriyle elde etmektedir.Bu nokta bizim fonksiyonu çağırırken bu değerleri bu fonksiyona parametre olarak geçmemiz gerekir.

dinamikToplama(34, 55);
dinamikToplama(34, 46);

function gelirHesapla(a, b, c) {
  let toplamGelir = a + b + c;

  return toplamGelir;
}

const toplam = gelirHesapla(10, 12, 43);

document.write("Toplam Gelir:", toplam, "<br/>");

// Fonksiyon içerisindeki bir değere fonksiyonun {} dışarısında erişemeyiz.Bu yüzden bir görevliden yardım alırız.Bu görevli return'dür.Return fonksiyonun bir değeri döndürmesini sağlar.

// todo: Bir fonskiyon oluşturunuz.Bu fonksiyon kendisine dışarıdan verilen 3 adet sayının toplamı hesaplasın ve sonucu ekrana yazdırsın.

function örnekToplama(sayı1, sayı2, sayı3) {
  let toplam = sayı1 + sayı2 + sayı3;

  document.write("Örnek Toplama:", toplam, "<br/>");
}

örnekToplama(11, 12, 13);

// * Javascript Girdi Metotları

// prompt(): Kullanıcıdan açılır bir popup ile değer almak için kullanılır.Bu metot ile alınan değer bir değişkene atanarak program içerisinde kullanılabilir.

// const age = prompt("Lütfen yaşınızı giriniz");

// const number = parseInt(prompt("Sayı giriniz"));

// document.write("Kullanıcı yaşı:", age, "<br/>");

// document.write("Tip:", typeof age, "<br/>");

// document.write("Tip-1:", typeof number, "<br/>");

// prompt metodunun almış olduğu değerin veri tipi string'dir.Biz string bir ifadeyi number a çevirmek istiyorsak parseInt() metodunu kullanabiliriz.Bu metot () içerisinde kendisine verilen ifadeyi number a çevirir.

// confirm(): Kullanıcıdan açılır popup ile onay almak için kullanılır.Bu metot 'ok' ve 'cancel' şeklinde iki seçenek sunar.ok seçilmesi durumunda 'true' cancel durumunda 'false' değer döndürür.

// const response = confirm("Silme işlemini onaylıyormusunuz ?");

// document.write("Kullanıcı yanıtı:", response, "<br/>");

// todo: Kullanıcıdan prompt ile alınan iki adet sayının ortalamasını hesaplayınız.

// Kullanıcıdan iki adet sayı al
// const number1 = parseInt(prompt("Birinci sayıyı giriniz."));
// const number2 = parseInt(prompt("İkinci sayıyı sayıyı giriniz."));

// // Bu sayıların ortalmasını hesapla
// // i-) Bu sayıları topla

// const toplam1 = number1 + number2;
// // ii-) Toplam sonucunu 2 ye böl
// const ortalama = toplam1 / 2;

// // Ortalamayı ekrana yazdır

// document.write("Ortalama:", ortalama, "<br/>");

document.write("---------------------------------------", "<br/>");

// * Javascript String Metotları

const metin =
  "               Javascript dersinden selamlar.Dünyanın en popüler yazılım dilini piyasanın en iyi yazılım akademisinde öğreniyoruz.Udemigin kaliteli eğitimleri sayesinde çok iyi seviyeye geleceğiz.UdemigAkademi UdemigAkademi UdemigAkademi UdemigAkademi         ";

document.writeln("Metin: ", metin, "<br/>", "<br/>");

// length: Metinin karakter uzunluğunu belirlemek için kullanılır.

document.writeln("Metin uzunluğu: ", metin.length, "<br/>", "<br/>");

// toLocaleUpperCase(): Metni tüm harfler büyük olacak şekilde düzenler.

document.writeln(
  "Metin büyük harf: ",
  metin.toLocaleUpperCase(),
  "<br/>",
  "<br/>"
);

// toLocaleLowerCase(): Metni tüm harfler küçük olacak şekilde düzenler.

document.writeln(
  "Metin küçük harf: ",
  metin.toLocaleLowerCase(),
  "<br/>",
  "<br/>"
);

// ! Bu metotların toLowerCase() ve toUpperCase 'e göre farkı locale ile kullanılan metotların farklı dil desteği sunması ama diğerinin sadece ingilizce için çalışmasıdır

const deneme1 = "English";
const deneme2 = "İngilizce";

document.writeln("Deneme: ", deneme1.toLocaleLowerCase(), "<br/>", "<br/>");
document.writeln("Deneme-2: ", deneme2.toLowerCase(), "<br/>", "<br/>");

// indexOf(): Bir metin içerisinde belirtilen kelimenin hangi sırada olduğunu belirlemek için kullanılır.Bu metot bir kelimeyi string ifade içerisinde arayacağından () içerisinde aranacak kelimenin yazılmasını ister.

document.writeln(
  "Metin içerisinde 'Udemigin' sırası: ",
  metin.indexOf("Udemigin"),
  "<br/>",
  "<br/>"
);

document.writeln(
  "Metin içerisinde 'UdemigAkademi' sırası: ",
  metin.indexOf("UdemigAkademi"),
  "<br/>",
  "<br/>"
);

// lastIndexOf(): Bir metin içerisinde belirtilen kelimenin hangi sırada olduğunu belirlemek için kullanılır. Bu metot bir kelimeden string ifade içerisinde birden fazla varsa bunlardan sounucusunun index'ini bulur.
document.writeln(
  "Metin içerisinde 'UdemigAkademi' sırası: ",
  metin.lastIndexOf("UdemigAkademi"),
  "<br/>",
  "<br/>"
);

// slice(): Bir metin ifade içerisinde belirli aralığı almak için kullanılır[Ör:23-56 arasını]

document.writeln(
  "Metin içerisinde 23-56  arası: ",
  metin.slice(23, 56),
  "<br/>",
  "<br/>"
);

// Bu metot bizden iki adet değer ister.Bu değerlerden birincisi başlangıç ikincisi bitiş değeridir.Başlangıç değeri zorunludur ama bitiş değeri opsiyoneldir.Bitiş değeri verilirse başlangıç değerinden bu değere kadarki aralığı alır ama verilmezse string ifadenin sonuna kadar alır.

// concat(): Bir yada daha fazla değeri bir stirng ile birleştirmek için kullanılır.

document.writeln(
  "Metinin sonuna Saadet,Ayşe,Ali,Figen ekle: ",
  metin.concat("Saadet", "Ayşe", "Ali", "Figen", 2345),
  "<br/>",
  "<br/>"
);

// replace(): Bir metin içerisinde belirli bir kelimeyi başka bir kelimeyle değiştirmek için kullanılır.Bu metot bizden iki değer ister.Birincisi metin içerisinde hangi kelimenin değiştirileceği ikincisi ise hangi değerle değiştirileceği.

document.writeln(
  "Metinin içerisindeki seviyeye kelimesini düzey ile değiştir ",
  metin.replace("seviyeye", "düzeye"),
  "<br/>",
  "<br/>"
);

// replaceAll(): Bir metin içerisinde değiştirilmesi istenen kelimeleden birden fazla varsa hepsini güncellemek için kullanılır.

document.writeln(
  "Metinin içerisindeki UdemigAkademi kelimesini EN İYİ YAZILIM AKADEMİSİ ile değiştir ",
  metin.replaceAll("UdemigAkademi", "EN İYİ YAZILIM AKADEMİSİ"),
  "<br/>",
  "<br/>"
);

// includes(): Bir metin ifade içerisinde bir kelimenin olup olmadığını kontrol etmek için kullanılır.Bu metot kendisine kontrol edilmek istenen kelimenin verilmesi ister.Eğer belirtilen kelime varsa true yoksa false döndürür.

document.writeln(
  "Metinin içerisindeki Dünyanın kelimesi var mı ",
  metin.includes("Dünyanın"),
  "<br/>",
  "<br/>"
);

// trim(): Bir string ifadenin başında ve sonunda bulunan boşlukları kaldırmak için kullanılır.

document.writeln(
  "Metinin boşluklar kaldırıldı ",
  metin.trim().length,
  "<br/>",
  "<br/>"
);

// split(): Bir string ifadenin hangi ayıraca göre bölüneceğini belirlemek için kullanılır.

document.writeln("Metinin  ", metin.split("."), "<br/>", "<br/>");

let kelime =
  "Merhaba//Bizler Javascriptin içinden geçeceğiz//Javascript bizim için çok kolay //";
document.writeln("Metinin  ", kelime.split("//"), "<br/>", "<br/>");
