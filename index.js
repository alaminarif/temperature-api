const API_KEY = `3656a50bc920e5069ae2d5d8f4d59d98`;
const searchTemperature = () => {
  const cityName = document.getElementById("city-name").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (temperature) => {
  setInnerText("city", temperature.name);
  setInnerText("temp", temperature.main.temp);
  setInnerText("condition", temperature.weather[0].main);
  // set weather icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const icon = document.getElementById("icon");
  icon.setAttribute("src", url);
};
