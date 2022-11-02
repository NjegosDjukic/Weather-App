import axios from 'axios';

export const GetCurrentDayWeather = async (cityName) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=f34f51bb1d514837176eaefd709b0af7&units=metric&q=${cityName}`);
  return response;
};
export const getWeekForecast = async (cityName) => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=f34f51bb1d514837176eaefd709b0af7`);
  return response;
};
