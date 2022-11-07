import React, { useState } from 'react';
import CurrentDayForecast from './CurrentDayForecast';
import FourDayForecast from './FourDaysForecast';
import { Container } from './styles/WeatherStyles';
import Header from './Header';

const Weather = () => {
  const [ city, setCity ] = useState('novi sad');

  const handleSubmit = (e) => {
    setCity(e.cityName);
  };

  return (
    <div>
      <Header handleSubmit={handleSubmit} />
      <Container>
        <CurrentDayForecast city={city} />
      </Container>
      <div>
        <FourDayForecast city={city} />
      </div>
    </div>
  );
};
export default Weather;
