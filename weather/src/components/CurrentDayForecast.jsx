import React, { useState, useEffect } from 'react';
import { getIcon } from '../getIcon';
import { Header, StyledText, IconWrap } from './styles/CurrentDayStyles';

const CurrentDayForecast = (data) => {
  const [ icon, setIcon ] = useState('');

  useEffect(() => {
    setIcon(getIcon(data?.data?.weather[0]?.icon));
  }, [data?.data?.weather]);

  return (
    <Header>
      <IconWrap>
        <img src={icon} alt='' style={{ width: '250px' }} />
      </IconWrap>
      <div style={{ width: '50%' }}>
        <StyledText>Today</StyledText>
        <h1>
          {data?.data?.name}
          ,
          {data?.data?.sys?.country}
        </h1>
        <StyledText>
          Temperature:
          {data?.data?.main?.temp.toFixed(1)}
          °C
        </StyledText>
        <p style={{ fontSize: '24px' }}>{data?.data?.weather[0].description}</p>
      </div>
    </Header>
  );
};
export default CurrentDayForecast;
