// Özellikle kapsam api'a lara istek atıldığında bizim kim olduğumuzu tespit edebilmek için bir options objesi  verir.Bu options objesi bizim kim olduğumuzu api'a belirtir.Bunu bir spor salonundaki üyelik kartı uygulamasına benzetebiliriz.
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e52e3bfef4msh2b3dc66d0cfb4a8p16624ejsn1c91d9af0240",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export class API {
  // Popüler müzikleri api'dan alan fonk.
  async getPopular() {
    // Api'a istek at ve gelen veriyi projede kullanılacak formata dönüştür
    try {
      // Api'a istek at
      const response = await fetch(
        "https://shazam.p.rapidapi.com/search?term=duman",
        options
      );
      // Api'dan gelen cevabı js nesnesine çevir
      const data = await response.json();

      // Api'dan gelen veriyi proje içerisinde kullanabileceğimiz formata çevirdik
      const formattedData = data.tracks.hits.map((item) => item.track);

      // Fonksiyon çağırıldığında formattedData'yı return et

      return formattedData;
    } catch (error) {
      // Eğer hata alınırsa bunu yakala ve alert ile kullanıcıya uyarı ver
      alert(error);
    }
  }
  // Aratılan kelimeye göre şarkıları api'dan alan fonksiyon
  async getSearchMusics(query) {
    // Aratılan kelimeye göre api'dan şarkıları al  ve projede kullanılacak formata dönüştür
    try {
      // Api'a istek at
      const res = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${query}`,
        options
      );
      // Api'dan gelen cevabı js nesnesine çevir
      const data = await res.json();

      // Api'dan gelen veriyi proje içerisinde kullanabileceğimiz formata çevirdik
      const formattedData = data.tracks.hits.map((item) => item.track);

      // Fonksiyon çağırıldığında formattedData'yı return et

      return formattedData;
    } catch (error) {
      // Eğer hata alınırsa bunu yakala ve alert ile kullanıcıya uyarı ver
      alert(error);
    }
  }
}
