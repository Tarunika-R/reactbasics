import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const API_KEY = "b5f8cb80ec4e19c626bef7813436f264"; // Replace with your OpenWeatherMap API key
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (city.trim() === "") {
      setWeather(null);
      setError("");  // Clear any existing errors if city is empty
      return;
    }

    const getWeather = async () => {
      setLoading(true);
      setWeather(null);
      setError("");

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();

        setWeather(data);
        updateBackground(data.weather[0].main); // Update background
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [city]); // The useEffect hook will be triggered when the city changes

  // Function to dynamically update body background based on weather
  const updateBackground = (weather) => {
    const weatherClass = mapWeatherToClass(weather);
    document.body.className = ""; // Clear existing classes
    document.body.classList.add(weatherClass); // Add new weather class
  };

  // Map weather conditions to CSS classes
  const mapWeatherToClass = (weather) => {
    switch (weather.toLowerCase()) {
      case "clear":
        return "clear-sky";
      case "clouds":
        return "cloudy";
      case "rain":
        return "rainy";
      case "snow":
        return "snowy";
      case "mist":
      case "fog":
        return "foggy";
      case "thunderstorm":
        return "stormy";
      default:
        return "default-bg";
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {loading && <div className="spinner"></div>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
