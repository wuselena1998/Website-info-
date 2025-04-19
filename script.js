const radiationData = {
  nyc: {
    current: 0.12,
    history: [0.11, 0.12, 0.13, 0.12, 0.11]
  },
  tokyo: {
    current: 0.20,
    history: [0.21, 0.22, 0.20, 0.19, 0.20]
  },
  chernobyl: {
    current: 4.5,
    history: [4.6, 4.7, 4.5, 4.4, 4.3]
  }
};

const locationSelect = document.getElementById("location");
const currentEl = document.getElementById("current");
const historyEl = document.getElementById("history");

function updateDisplay(location) {
  const data = radiationData[location];
  currentEl.textContent = `${data.current} μSv/h`;

  historyEl.innerHTML = "";
  data.history.forEach((val, i) => {
    const li = document.createElement("li");
    li.textContent = `Day ${i + 1}: ${val} μSv/h`;
    historyEl.appendChild(li);
  });
}

locationSelect.addEventListener("change", () => {
  updateDisplay(locationSelect.value);
});

// Load default
updateDisplay(locationSelect.value);
