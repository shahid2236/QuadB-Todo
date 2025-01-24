import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../utils/api';

const WeatherDisplay = () => {
  const [city, setCity] = useState('Delhi'); 
  const [weather, setWeather] = useState(null);
  const [searchCity, setSearchCity] = useState(''); 
  const [error, setError] = useState('');

  
  useEffect(() => {
    fetchWeatherData(city);
  }, []);

  
  const fetchWeatherData = async (cityName) => {
    try {
      const data = await fetchWeather(cityName);
      setWeather(data);
      setError('');
    } catch {
      setError('Failed to fetch weather data. Please check the city name.');
    }
  };

 
  const handleSearch = () => {
    if (searchCity.trim()) {
      fetchWeatherData(searchCity);
      setCity(searchCity);
      setSearchCity('');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Weather</h2>

      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Enter city"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {weather && (
        <div>
          <p className="font-bold text-xl">{weather.name}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
