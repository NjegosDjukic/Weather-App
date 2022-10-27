import React, { useState, useEffect } from 'react';
import { getIcon } from '../getIcon';

const CurrentDay = (data) => {
  const [ icon, setIcon ] = useState('');
  const { name: cityName, main, weather } = data.data;
  const { temp: currentTemperature } = main;
  const { icon: currentIcon, description } = weather[0];

  useEffect(() => {
    setIcon(getIcon(currentIcon));
  }, [currentIcon]);

  return (
    <div className='header'>
      <div className='header-icon-wrap'>
        <img src={icon} alt='' className='icon' />
      </div>
      <div style={{ width: '50%' }}>
        <span style={{ fontSize: '24px' }}>Today</span>
        <h1>{cityName}</h1>
        <p style={{ fontSize: '24px' }}>
          Temperature:
          {currentTemperature.toFixed(1)}
          °C
        </p>
        <p style={{ fontSize: '24px' }}>{description}</p>
      </div>
    </div>
  );
};
export default CurrentDay;
