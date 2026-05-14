const locationEl = document.querySelector("#locationLabel");
locationEl.textContent = "Откривам местоположение...";

navigator.geolocation.getCurrentPosition(async (pos) => {
  const { latitude, longitude } = pos.coords;
  const name = await getLocationName(latitude, longitude);
  locationEl.textContent = name; // примерно: "София, България"
}, () => {
  locationEl.textContent = "Неуспешно местоположение";
});
