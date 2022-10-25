import React, { useState, useEffect } from 'react';
import { getIcon } from '../getIcon';

const CurrentDay = (data) => {
  const [ icon, setIcon ] = useState('');

  useEffect(() => {
    setIcon(getIcon(data.data.weather[0].icon));
  }, [data.data.weather]);

  return (
    <div className='header'>
      <div className='header-icon-wrap'>
        <img src={icon} alt='' className='icon' />
      </div>
      <div style={{ width: '50%' }}>
        <span style={{ fontSize: '24px' }}>Today</span>
        <h1>{data.data.name}</h1>
        <p style={{ fontSize: '24px' }}>
          Temperature:
          {data.data.main.temp.toFixed(1)}
          °C
        </p>
        <p style={{ fontSize: '24px' }}>{data.data.weather[0].description}</p>
      </div>
    </div>
  );
};
export default CurrentDay;
