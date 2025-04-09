 // function onGeoOk(position) {
//   const lat = position.coords.latitude;
//   const lng = position.coords.longitude;
//   console.log("You live in", lat, lng);
// }
// function onGeoError() {
//   alert("Can't find you. No weather for you.");
// }
// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "4e91e83bb01e540f2a0eab95f68cbb8c";

// 우만동 고정 좌표
const lat = 37.2830;
const lon = 127.0467;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    city.innerText = "우만동";
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
  });
