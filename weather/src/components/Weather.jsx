import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { GetCurrentDayWeather, getWeekForecast } from '../services/getWeather';
import CurrentDayForecast from './CurrentDayForecast';
import FourDayForecast from './FourDaysForecast';
import { Container, ErrorMessage } from './styles/WeatherStyles';
import Header from './Header';

const Weather = () => {
  const [ city, setCity ] = useState('novi sad');
  const { data } = useQuery([ 'currentDayForecast', city ], () => GetCurrentDayWeather(city));
  const { data: weekForecastData } = useQuery([ 'weekForecast', city ], () => getWeekForecast(city));

  const handleSubmit = (e) => {
    setCity(e.cityName);
  };

  return (
    <div>
      <Header handleSubmit={handleSubmit} />
      <Container>
        {data
          ? <CurrentDayForecast data={data.data} />
          : <ErrorMessage>Error. Location not found. Try again</ErrorMessage>}
      </Container>
      <div>
        {weekForecastData && <FourDayForecast data={weekForecastData.data} />}
      </div>
    </div>
  );
};
export default Weather;
