import React from 'react';
import { useQuery } from 'react-query';
import { Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { getCurrentDayWeather, getWeekForecast } from '../services/getWeather';
import CurrentDayForecast from './CurrentDayForecast';
import FourDayForecast from './FourDaysForecast';

const Weather = () => {
  const { data } = useQuery('currentDayForecast', getCurrentDayWeather);
  const { data: weekForecastData } = useQuery('weekForecast', getWeekForecast);
  const { logout, user } = useAuth();

  return (
    <div>
      <div className='header'>
        <p className='username'>{user && user.displayName}</p>
        <Button onClick={logout} variant='contained' className='logout-button'>Log out</Button>
      </div>
      <div className='container'>
        {data && <CurrentDayForecast data={data.data} />}
      </div>
      <div>
        {weekForecastData && <FourDayForecast data={weekForecastData.data} />}
      </div>
    </div>
  );
};
export default Weather;
