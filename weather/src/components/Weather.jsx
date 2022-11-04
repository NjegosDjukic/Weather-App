import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { GetCurrentDayWeather, getWeekForecast } from '../services/getWeather';
import CurrentDayForecast from './CurrentDayForecast';
import FourDayForecast from './FourDaysForecast';
import { Container } from './styles/WeatherStyles';
import Header from './Header';

const Weather = () => {
  const [ currentDayWeather, setCurrentDayWeather ] = useState();
  const [ weekForecast, setWeekForecast ] = useState(null);
  const [ city, setCity ] = useState('novi sad');
  const { data } = useQuery([ 'currentDayForecast', city ], () => GetCurrentDayWeather(city));
  const { data: weekForecastData } = useQuery([ 'weekForecast', city ], () => getWeekForecast(city));

  useEffect(() => {
    if (data) {
      setCurrentDayWeather(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (weekForecastData) {
      setWeekForecast(weekForecastData);
    }
  }, [weekForecastData]);

  const handleSubmit = (e) => {
    setCity(e.cityName);
  };

  return (
    <div>
      <Header handleSubmit={handleSubmit} />
      <Container>
        <CurrentDayForecast data={currentDayWeather} />
      </Container>
      <div>
        <FourDayForecast data={weekForecast} />
      </div>
    </div>
  );
};
export default Weather;
