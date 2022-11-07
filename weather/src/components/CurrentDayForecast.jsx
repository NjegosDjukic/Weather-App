import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getIcon } from '../getIcon';
import { Header, StyledText, IconWrap } from './styles/CurrentDayStyles';
import { getCurrentDayWeather } from '../services/getWeather';

const CurrentDayForecast = ({ city }) => {
  const [ icon, setIcon ] = useState('');
  const [ currentDayWeather, setCurrentDayWeather ] = useState();
  const { data } = useQuery([ 'currentDayForecast', city ], () => getCurrentDayWeather(city));

  useEffect(() => {
    if (data) {
      setCurrentDayWeather(data.data);
    }
  }, [data]);
  const { name: cityName } = currentDayWeather || {};
  const { temp: currentTemperature } = currentDayWeather?.main || {};
  const { country } = currentDayWeather?.sys || {};
  const { icon: currentIcon, description } = currentDayWeather?.weather[0] || {};

  useEffect(() => {
    setIcon(getIcon(currentIcon));
  }, [currentIcon]);

  return (
    <Header>
      <IconWrap>
        <img src={icon} alt='' style={{ width: '250px' }} />
      </IconWrap>
      <div style={{ width: '50%' }}>
        <StyledText>Today</StyledText>
        <h1>
          {cityName}
          ,
          {country}
        </h1>
        <StyledText>
          Temperature:
          {currentTemperature?.toFixed(1)}
          °C
        </StyledText>
        <p style={{ fontSize: '24px' }}>{description}</p>
      </div>
    </Header>
  );
};
export default CurrentDayForecast;
