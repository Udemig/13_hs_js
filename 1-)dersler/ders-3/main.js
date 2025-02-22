// * Javascript Koşullu Yapılar  (if-else)

// Javascript'de koşullu yapılar if-else ile sağlanır.

// todo: Kullanıcının yaşı 18'den büyükse 'ehliyet alabilir' değilse 'ehliyet alamaz' yazdıran code-script'i oluşturunuz.

let yaş = 17;

if (yaş > 18) {
  document.write(`Kullanıcı ehliyet alabilir <br/>`);
} else {
  document.write(`Kullanıcı ehliyet alamaz <br/>`);
}

// todo: Kullanıcı ortalaması 50'den küçükse 'kaldınız' 50-64 aralığında ise 'geçtiniz ama belge alamadınız' 65-84 arasındaysa 'teşekkür belgesi aldınız' 85 ve üzerindeyse 'Takdir belgesi aldınız' yazdıran code-script'i oluşturunuz.

let ortalama = 85;

if (ortalama < 50) {
  document.write(`Kaldınız <br/>`);
} else if (ortalama > 50 && ortalama < 65) {
  document.write(`Dersten geçtiniz ama belge alamadınız <br/>`);
} else if (ortalama >= 65 && ortalama < 85) {
  document.write(`Teşekkür belgesi aldınız <br/>`);
} else {
  document.write(`Takdir belgesi aldınız <br/>`);
}

// todo: Kullanıcının kredi notunu alınız.Sonrasında eğer kredi notu 50'nin altındaysa 'Kredi alamazsınız';50-70 arasındaysa 50.000tl kredi alabilirsiniz;70-85 arasındaysa 150.000 tl kredi alabilirsiniz;85 ve üstüyse 300.000 tl kredi alabilirsiniz yazdıran code-scripti oluşturunuz.

let krediNotu = 86;

// let krediNotu = parseInt(prompt("Lütfen kredi notunuzu giriniz."));

if (krediNotu < 50) {
  document.write(`Kredi alamazsınız <br/>`);
} else if (krediNotu > 50 && krediNotu < 70) {
  document.write(`50.000 tl kredi alabilirsiniz <br/>`);
} else if (krediNotu > 70 && krediNotu < 85) {
  document.write(`150.000 tl kredi alabilirsiniz <br/>`);
} else {
  document.write(`300.000 tl kredi alabilirsiniz <br/>`);
}

// * Javascript switch-case yapısı

// Javascript'de bir değişkenin belirli sayıdaki değerlerine bağlı olarak işlem yapabilmemizi sağlayan yapıya switch-case denir.

// switch kısmında hangi değişkenin değerine göre kontrol yapılacaksa bunu belirtmemiz istenir.Her değer ise case ile yönetilir.

let haftanınGünü = 8;

switch (haftanınGünü) {
  case 1:
    document.write(`Pazartesi <br/>`);
    break;
  case 2:
    document.write(`Salı <br/>`);
    break;
  case 3:
    document.write(`Çarşamba <br/>`);
    break;
  case 4:
    document.write(`Perşembe <br/>`);
    break;
  case 5:
    document.write(`Cuma <br/>`);
    break;
  case 6:
    document.write(`Cumartesi <br/>`);
    break;
  case 7:
    document.write(`Pazar <br/>`);
    break;
  default:
    document.write(`Tanımsız Gün <br/>`);
}

// todo: Kullanıcıdan alınan bir sayıya göre kurs adlarını ekrana yazdıran codescripti oluşturunuz.(1 için 'Frontend' 2 için 'Backend' 3 için 'React Native' 4 için 'İngilizce' 5 için 'Swift-İos' bunun haricindeki değerler için tanımsız değer yazdırınız) [ Switch case kullanınız]

// const kursNo = parseInt(prompt("Kurs numarasını giriniz."));

// switch (kursNo) {
//   case 1:
//     document.write(`Frontend <br/>`);
//     break;
//   case 2:
//     document.write(`Backend <br/>`);
//     break;
//   case 3:
//     document.write(`React Native <br/>`);
//     break;
//   case 4:
//     document.write(`İngilizce <br/>`);
//     break;
//   case 5:
//     document.write(`Swift-İos <br/>`);
//     break;
//   default:
//     document.write(`Tanımsız Kurs <br/>`);
// }

// * Javascript Döngüler (Loops)

// Javascript'de tekrar gerektiren durumları yönetmek için kullanılır.

// ! Not:

let sayı = 10;

document.write(`Sayı: ${sayı} <br/>`);

// sayı = sayı + 1;
sayı++;

document.write(`Sayı: ${sayı} <br/>`);

sayı += 2;

document.write(`Sayı: ${sayı} <br/>`);

// sayı = sayı * 10;
sayı *= 10;

document.write(`Sayı: ${sayı} <br/>`);

// sayı = sayı / 2;
sayı /= 2;

document.write(`Sayı: ${sayı} <br/>`);

document.write(`------------------------------------------------- <br/>`);

let sayı1 = 1;
let sayı2 = 2;
let sayı3 = 3;
let sayı4 = 4;
let sayı5 = 5;

document.write(`Sayı: ${sayı1} <br/>`);
document.write(`Sayı: ${sayı2} <br/>`);
document.write(`Sayı: ${sayı3} <br/>`);
document.write(`Sayı: ${sayı4} <br/>`);
document.write(`Sayı: ${sayı5} <br/>`);

document.write(`------------------------------------------------- <br/>`);

// * For Döngüsü

for (let sayi = 0; sayi < 10; sayi++) {
  document.write(`Sayı: ${sayi} <br/>`);
}

document.write(`------------------------------------------------- <br/>`);

// todo: Kullanıcının 1'den 50'ye kadar çektiği şınavları ekrana yazdıran code-script'i oluşturunuz.

for (let şınavSayaç = 1; şınavSayaç <= 50; şınavSayaç++) {
  document.write(`${şınavSayaç} . şınav <br/>`);
}

document.write(`------------------------------------------------- <br/>`);

// todo: 0'dan 50'ye kadar olan çift sayıları ekrana for döngüsü kullanarak yazdırınız.

for (let a = 0; a <= 50; a += 2) {
  document.write(`${a} <br/>`);
}

document.write(`------------------------------------------------- <br/>`);

// * While Döngüsü

// While döngüsü bir şarta bağlı olarak çalışır
let sayaç = 0;

while (sayaç < 10) {
  document.write(`Malatyadan selamlar <br/>`);

  sayaç++;
}

document.write(`------------------------------------------------- <br/>`);

// todo: 1'den 30'a kadar olan tek sayıları ekrana while döngüsü ile yazdırınız.

let tekSayaç = 1;

while (tekSayaç < 30) {
  document.write(`${tekSayaç} <br/>`);

  tekSayaç += 2;
}

document.write(`------------------------------------------------- <br/>`);

// * Do-While Döngüsü

// Do-While döngüsü while benzerdir.Bir şarta bağlı olarak çalışır.Fakat do-while while'dan farklı olarak önce çalışır sonra şartı kontrol eder.Bu sebeple şart sağlanmasa bile do-while en az 1 kere çalışır.

let denemeSayaç = 6;

do {
  document.write(`Javascript'den selamlar  <br/>`);
  denemeSayaç++;
} while (denemeSayaç < 5);

// todo: 1'den 10'a kadar olan sayıları do-while döngüsü kullanarak ekrana yazdırınız.

let sayi = 1;
do {
  document.write(sayi, "<br/>");
  sayi++;
} while (sayi <= 10);

// * Javascript Dizilerde Döngüler

let öğrenciler = ["Ahmet", "Ali", "Altan", "Aynura", "Burak", "Dilek", "Enes"];

// document.write(`Merhaba ${öğrenciler[0]} <br/>`);
// document.write(`Merhaba ${öğrenciler[1]} <br/>`);
// document.write(`Merhaba ${öğrenciler[2]} <br/>`);
// document.write(`Merhaba ${öğrenciler[3]} <br/>`);
// document.write(`Merhaba ${öğrenciler[4]} <br/>`);

// * forEach(): Bir dizideki herbir eleman için bir işlev tetiklemek için kullanılır.

document.write(`Öğrenciler: ${öğrenciler} <br/>`);

öğrenciler.forEach((öğrenci) => {
  document.write(`Merhaba ${öğrenci} <br/>`);
});

// forEach bir dizinin elemanları üzerinden dönerek belirtilen işlev neyse bunu gerçekleştirir.

// * map(): Bir dizideki herbir eleman için bir işlev tetiklemek için kullanılır ve geriye yeni bir dizi döndürür.

let sayılar = [1, 2, 3, 4, 5];

const yeniSayılar = sayılar.map((sayı) => sayı * 3);

document.write(`Sayılar: ${sayılar} <br/>`);

document.write(`Yeni Sayılar: ${yeniSayılar} <br/>`);

// ! Not: map ve forEach bir dizinin elemanlarını dönmek için kullanılır.Aralarındaki farksa map geriye yeni bir dizi oluşturduğundan mevcut dizi elemanları üzerinden değişiklikler yapabiliriz ama forEach'de bunu yapamayız

// todo: Bir kullanıcı dizi içerisindeki elemanları dönen ve herbir eleman için 1.kullanıcı [kullanıcı ismi],2. kullanıcı [kullanıcı ismi],... yazdıran code-script'i oluşturunuz.

let kullanıcılar = ["Hakan", "Hüseyin", "Işıl", "Saadet", "Şemşat"];

kullanıcılar.forEach((kullanıcı, index) => {
  document.write(`${index + 1}.kullanıcı: ${kullanıcı} <br/>`);
});

// ! Özet: Eğer bir dizi üzerinde değişiklikler yapılacaksa bu noktada map eğer sadece tüm elemanlar dönülecekse forEach kullanılır

// * Javascript try-catch yapısı

// Javascript'de programın belirli bir kısmında hata alınması halinde bu hatanın tüm programı patlatmasının önüne geçmemizi sağlayan yapıya try-catch yapısı denir.

// try kısmında bir işlem yapılır ve bu işlem sırasında hata alınırsa bu hata catch bloğunda yakalanır ve buna göre işlem yapılır.

// Birde finally bloğu bulunur.Bu blok en sonda çalışacak işlemi belirtir.

try {
  // throw ==> Elle hata fırlatmak için kullanılır
  throw new Error(`İşlem gerçekleşirken bir hata oluştu`);
  document.write(`İşlem yapılıyor... <br/>`);
} catch (error) {
  document.write(`İşlem yapılamadı ${error} <br/>`);
} finally {
  document.write(`İşlem tamamlandı <br/> `);
}

// todo: Pc 0-100 arasında bir random sayı oluştursun.Sonrasında kullanıcıdan bu sayıyı 3 hakla tahmin etmesini isteyiniz.Eğer 3 hak içerisinde tahmin edebilirse 'Tebrikler sayıyı doğru tahmin ettiniz' edemezse 'Sayıyı tahmin edemediniz' yazdırınız.Ayrıca eğer random sayıdan büyük bir sayı elde tahmin edildiyse 'Daha küçük tahminde bulununuz' ama daha küçük sayı girildiyse 'Daha büyük tahminde bulununuz' çıktısı veriniz.

const randomSayı = Math.round(Math.random() * 100);

let hak = 3;

while (hak < 3) {
  const tahmin = parseInt(prompt("0-100 arasında bir tahminde bulununuz"));

  if (!tahmin) {
    alert("Lütfen tahminde bulununuz");
    continue;
  } else if (tahmin === randomSayı) {
    alert("Tebrikler doğru tahminde bulundunuz");
    hak = 3;
  } else if (tahmin > randomSayı) {
    alert("Daha küçük bir tahminde bulununuz");
  } else {
    alert("Daha büyük bir tahminde bulununuz");
  }

  hak++;

  if (hak === 3) {
    alert(
      `Maalesef hakkınız bitti ve sayıyı bilemediniz.Random Sayı: ${randomSayı}  `
    );
  }
}

// * Jacascript Scope Kavramı

// Scope bir ifadenin erişilebilir olduğu alanı ifade eder.

// 1-) Global Scope:

// Global scope'a sahip bir ifadeye program içerisinde her yerden erişilebilir.

// 2-) Function Scope:

// Function scope'a sahip bir ifadeye sadece o function'ın içerisinde erişilir.

// 3-) Block Scope:

// Block scope'a sahip bir ifadeye sadece o ifadenin bloğu içerisinde erişilebilir.

let kullanıcıİsmi = "Yusuf YAMAN";

const çıktıVer = () => {
  document.write(`Kullanıcı adı: ${kullanıcıİsmi} <br/>`);
};

çıktıVer();

const stokToplam = () => {
  let sayı1 = 130;
  let sayı2 = 13;

  let toplam = sayı1 + sayı2;
};

stokToplam();

// document.write(`Stok: ${toplam} <br/>`);  toplam değişkeni func. scope'a sahip olduğudan buna sadece o func. içerisinde erişebiliriz.

let kullanıcıMesajı;

if (true) {
  kullanıcıMesajı = "Selamlar nasılsınız?";
}

// document.write(`Kullanıcı mesaj: ${kullanıcıMesajı} <br/>`); kullanıcıMesajı değişkeni block. scope'a sahip olduğudan buna sadece o block. içerisinde erişebiliriz.

document.write(`Kullanıcı mesaj: ${kullanıcıMesajı} <br/>`);

// * Javascript Set-Map  yapısı

// ! Set yapısı javascript'de benzersiz değerler elde etmek için kullanılır.Set yapısı oluşturulurken new Set() ile set yapısının bir örneği alınır.Sonrasında bu yapı bir değişkene atanarak kullanılır.

let carsSet = new Set();

carsSet.add("Bmw"); // add ile set yapısına ekleme yaparız.
carsSet.add("Audi");
carsSet.add("Tesla");
carsSet.add("Ferrari");
carsSet.add("Mazda");
// carsSet.add("Mazda"); Mazda set yapısı içerisinde olduğundan ekleme işlemi yapılmaz

console.log(carsSet);

carsSet.delete("Mazda");

console.log(carsSet);

// ! Set yapısı içerisindeki bir elemana erişmek için bu yapı dizi çevrilir.Sonrasında bu dizi içerisindeki değerlere erişebiliriz

// * Bir set yapısını diziye çevirmek için Array.from metodu kullanılır.
let carsArray = Array.from(carsSet);

console.log(carsArray);

console.log(carsArray[3]);

const yazılımDilleri = ["Html", "Css", "Javascript", "Sccc", "C", "C#"];

console.log(yazılımDilleri);

yazılımDilleri.push("Html");

// * Bir diziyi set yapısına çevirmek için new Set()  kullanılır

const yazılımDilleriSet = new Set(yazılımDilleri);

console.log(yazılımDilleriSet);

yazılımDilleriSet.add("Css");

console.log(yazılımDilleriSet);

console.log(yazılımDilleriSet.has("Js")); // has ==> set yapısı içerisinde bir değerin olup olmadığını kontrol etmek için kullanılır.

// yazılımDilleriSet.clear(); clear=> set yapısının içini boşaltmak için kullanılır

yazılımDilleriSet.delete("Css"); // delete ==> set yapısı içerisinden bir eleman silmek için kullanılır

console.log(yazılımDilleriSet);

console.log("<=========================================>");

// ! Map yapısı key-value çiftleri halinde değerler tutan veri yapılarıdır.

// * Map yapısı oluşturulurken new Map() kullanılır.Bu yapı ile javascript içerisindeki map yapısının bir örneği alınır ve bu bir değere atanarak kullanılır.

let personsMap = new Map();

personsMap.set("isim", "Şemşat"); // set ==> Map yapısı içerisine ekleme yapmak için kullanılır
personsMap.set("yaş", 30);
personsMap.set(4, "Malatya");

personsMap.set(4, "İstanbul"); // Eğer mevcut bir key ile setleme yapılırsa bu key'e sahip değer güncellenir

console.log(personsMap);

console.log(personsMap.get("yaş"));

personsMap.delete("yaş"); // delete ile map yapısı içerisindeki belirtilen keye sahip eleman silinir

console.log(personsMap);

console.log(personsMap.has("isim")); // map yapısı içerisinde belirtilen keye sahip eleman varmı bunu kontrol eder.

// ! Özetle set yapısı benzersiz değerleri saklar.Map yapısı ise içerisinde key-value değer çiftleri şeklinde verileri saklar
