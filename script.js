function getWeather() {
  const city = document.getElementById("city").value.trim() || "Baku"; // Default city Baku
  const apiKey = "e30c388e99f2f6337c9e636a7735550b"; // Your API key

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data); // For debugging, check console output
      if (data.cod === 200) {
        document.getElementById("temp").textContent = `🌡️ Temperature: ${data.main.temp}°C`;
        document.getElementById("desc").textContent = `🌦️ Condition: ${data.weather[0].description}`;
      } else {
        document.getElementById("temp").textContent = "City not found!";
        document.getElementById("desc").textContent = "";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById("temp").textContent = "Error fetching data!";
      document.getElementById("desc").textContent = "";
    });
}