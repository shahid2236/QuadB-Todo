import axios from 'axios';

const API_KEY = '3293dfa4972ef2a8dcb3c6e10625098b';

export const fetchWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  return response.data;
};
