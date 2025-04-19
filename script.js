// script.js

// Initialize the map when the page loads
const map = L.map('map').setView([40.7128, -74.0060], 10); // Default: New York City coordinates

// Add the tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to update the map's location based on the selected location
document.getElementById('location').addEventListener('change', function(e) {
  const location = e.target.value;
  let lat, lng;

  switch (location) {
    case 'nyc':
      lat = 40.7128; // New York City
      lng = -74.0060;
      break;
    case 'tokyo':
      lat = 35.6762; // Tokyo
      lng = 139.6503;
      break;
    case 'chernobyl':
      lat = 51.2768; // Chernobyl
      lng = 30.2210;
      break;
    default:
      lat = 40.7128; // Default to NYC
      lng = -74.0060;
  }

  // Move the map to the new location
  map.setView([lat, lng], 10);

  // Update radiation data for the selected location (mock data for now)
  fetchRadiationData(location);
});

// Function to simulate fetching radiation data (mock function for now)
function fetchRadiationData(location) {
  // For now, we're using mock data
  let radiationLevel = 0;

  switch (location) {
    case 'nyc':
      radiationLevel = 0.15; // Mock value for NYC
      break;
    case 'tokyo':
      radiationLevel = 0.12; // Mock value for Tokyo
      break;
    case 'chernobyl':
      radiationLevel = 5.0; // Higher radiation for Chernobyl
      break;
    default:
      radiationLevel = 0.15;
  }

  document.getElementById('current').textContent = `${radiationLevel} μSv/h`;

  // Simulate historical data (mock data)
  const history = [
    { day: 'Day 1', level: radiationLevel - 0.01 },
    { day: 'Day 2', level: radiationLevel - 0.02 },
    { day: 'Day 3', level: radiationLevel },
    { day: 'Day 4', level: radiationLevel + 0.01 },
    { day: 'Day 5', level: radiationLevel + 0.02 }
  ];

  const historyList = document.getElementById('history');
  historyList.innerHTML = ''; // Clear existing data

  history.forEach((entry) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${entry.day}: ${entry.level} μSv/h`;
    historyList.appendChild(listItem);
  });
}

// Set initial radiation data
fetchRadiationData('nyc');
