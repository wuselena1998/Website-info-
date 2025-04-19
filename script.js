const locationCoords = {
  nyc: [40.7128, -74.006],
  tokyo: [35.6762, 139.6503],
  chernobyl: [51.2768, 30.2219]
};

const map = L.map('map').setView(locationCoords.nyc, 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker(locationCoords.nyc).addTo(map);

document.getElementById("location").addEventListener("change", function() {
  const loc = this.value;
  const coords = locationCoords[loc];
  map.setView(coords, 5);
  marker.setLatLng(coords);
});
