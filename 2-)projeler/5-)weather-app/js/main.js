import { getFlagUrl, getWeather } from "./api.js";
import { displayWeather, elements, hideLoader, showLoader } from "./ui.js";

// const url = getFlagUrl(data.sys.country.toLowerCase());

// console.log(url);

elements.form.addEventListener("submit", async (e) => {
  // Sayfa yenilemesini engelle
  e.preventDefault();

  // Form içerisindeki inputun değerine eriş
  const query = e.target[0].value;

  // Loader'ı render et
  showLoader();

  const weatherData = await getWeather(query);

  // Loader'ı gizle
  hideLoader();

  const flagUrl = getFlagUrl(weatherData.sys.country);

  displayWeather(weatherData, flagUrl);
});
