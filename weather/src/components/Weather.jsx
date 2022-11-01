import React from 'react';
import { useQuery } from 'react-query';
import { Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { getCurrentDayWeather, getWeekForecast } from '../services/getWeather';
import CurrentDayForecast from './CurrentDayForecast';
import FourDayForecast from './FourDaysForecast';
import { Container, Header, Username } from './styles/WeatherStyles';

const Weather = () => {
  const { data } = useQuery('currentDayForecast', getCurrentDayWeather);
  const { data: weekForecastData } = useQuery('weekForecast', getWeekForecast);
  const { logout, user } = useAuth();

  return (
    <div>
      <Header>
        <Username>{user && user.displayName}</Username>
        <Button onClick={logout} variant='contained' className='logout-button'>Log out</Button>
      </Header>
      <Container>
        {data && <CurrentDayForecast data={data.data} />}
      </Container>
      <div>
        {weekForecastData && <FourDayForecast data={weekForecastData.data} />}
      </div>
    </div>
  );
};
export default Weather;
