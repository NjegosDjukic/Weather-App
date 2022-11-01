import React, { useState, useEffect } from 'react';
import { getIcon } from '../getIcon';
import { Header, StyledText, IconWrap } from './styles/CurrentDayStyles';

const CurrentDay = (data) => {
  const [ icon, setIcon ] = useState('');
  const { name: cityName, main, weather } = data.data;
  const { temp: currentTemperature } = main;
  const { icon: currentIcon, description } = weather[0];

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
        <h1>{cityName}</h1>
        <StyledText>
          Temperature:
          {currentTemperature.toFixed(1)}
          °C
        </StyledText>
        <p style={{ fontSize: '24px' }}>{description}</p>
      </div>
    </Header>
  );
};
export default CurrentDay;
