document.getElementById("weather-form").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const city = document.getElementById("city-input").value;
    const weatherResult = document.getElementById("weather-result");
  
    weatherResult.innerHTML = "Loading...";
  
    try {
      const response = await fetch(`/api/weather?city=${city}`);
      const data = await response.json();
  
      if (data.error) {
        weatherResult.innerHTML = `<p class="text-red-500">${data.error}</p>`;
      } else {
        weatherResult.innerHTML = `
          <h2 class="text-xl font-bold text-blue-600">${data.location}</h2>
          <p class="text-gray-700">Temperature: ${data.temperature}°C</p>
          <p class="text-gray-500">${data.description}</p>
        `;
      }
    } catch (error) {
      weatherResult.innerHTML = `<p class="text-red-500">Failed to fetch weather data.</p>`;
    }
  });
  