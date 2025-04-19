const locationDropdown = document.getElementById("location");
const current = document.getElementById("current");
const historyList = document.getElementById("history");

const locationData = {
  nyc: {
    coords: [40.7128, -74.006],
    current: 0.15,
    history: [0.14, 0.16, 0.15, 0.15, 0.14],
  },
  tokyo: {
    coords: [35.6762, 139.6503],
    current: 0.11,
    history: [0.12, 0.11, 0.11, 0.10, 0.11],
  },
  chernobyl: {
    coords: [51.2766, 30.221],
    current: 3.75,
    history: [3.80, 3.70, 3.75, 3.74, 3.76],
  },
};

let map = L.map("map").setView([40.7128, -74.006], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
let marker = L.marker([40.7128, -74.006]).addTo(map);

function updateData(location) {
  const data = locationData[location];
  current.textContent = `${data.current} μSv/h`;
  historyList.innerHTML = "";
  data.history.forEach((val, idx) => {
    const li = document.createElement("li");
    li.textContent = `Day ${idx + 1}: ${val} μSv/h`;
    historyList.appendChild(li);
  });

  // update map
  map.setView(data.coords, 6);
  marker.setLatLng(data.coords);
}

locationDropdown.addEventListener("change", (e) => {
  updateData(e.target.value);
});

// initial load
updateData("nyc");
