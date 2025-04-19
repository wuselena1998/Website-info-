// script.js

const radiationData = {
  nyc: {
    coords: [40.7128, -74.006],
    current: 0.12,
    history: [0.11, 0.12, 0.13, 0.12, 0.12]
  },
  tokyo: {
    coords: [35.6762, 139.6503],
    current: 0.09,
    history: [0.08, 0.09, 0.1, 0.09, 0.09]
  },
  chernobyl: {
    coords: [51.2768, 30.2219],
    current: 2.35,
    history: [2.3, 2.4, 2.5, 2.35, 2.33]
  }
};

const map = L.map('map').setView([40.7128, -74.006], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let marker = L.marker([40.7128, -74.006]).addTo(map);

const locationSelect = document.getElementById("location");
const currentDisplay = document.getElementById("current");
const historyList = document.getElementById("history");

function updateDisplay(location) {
  const data = radiationData[location];
  currentDisplay.textContent = `${data.current} μSv/h`;

  historyList.innerHTML = "";
  data.history.forEach(day => {
    const li = document.createElement("li");
    li.textContent = `${day} μSv/h`;
    historyList.appendChild(li);
  });

  map.setView(data.coords, 6);
  marker.setLatLng(data.coords);
}

locationSelect.addEventListener("change", (e) => {
  updateDisplay(e.target.value);
});

updateDisplay("nyc");
