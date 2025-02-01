// * Javascript Çıktı Metotları

// Javascript'de çıktı vermek için kullanılan 3 adet metot bulunmaktadır.

// 1-) document.write():

// Html'de tarayıcaki beyaz alan body'e karşılık gelmektedir.Bu kısmın javascript'deki karşılığı ise 'document'dir.Bizler document.write() metodu ile bu alana çıktı verebiliriz.Çıktı verilmek istenen content ()  içerisinde yazılır.

document.write("Merhaba Dünya" + "<br/>");

document.write(
  "Udemig akademide Frontend kursunda javascript derslerine başladık." + "<br/>"
);

// 2-) console.log():

// ? console tarayıcıda sağ tık > incele menüsünde açılan bir sekmedir.

// console.log() metodunda () içerisinde yazılan content bu alanda çıktı olarak yazdırılır.

console.log("13 HS sınıfında javascript derslerine başladık.");
console.log("Merhaba Js");

// Buradaki console proje içerisindeki hataların incelenmesi,bağlantı ve veri kontrolü için kullanılır.

// 3-) alert(): Tarayıcıda açılır bir popup ile kullanıcıya bir mesaj iletmek için kullanılır.

alert("Bu alan boş bırakılamaz");
