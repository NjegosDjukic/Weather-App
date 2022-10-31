import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material/';
import BasicModal from './Modal';
import { getIcon } from '../getIcon';
import { Card } from './styles/CardStyles';

const SingleDayForecast = ({ dayProps }) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const [ icon, setIcon ] = useState();
  const handleOpen = () => setIsOpen(true);

  useEffect(() => {
    setIcon(getIcon(dayProps[4].weather[0].icon));
  }, [dayProps]);

  return (
    <Card>
      <p style={{ fontSize: '24px' }}>{dayProps[4].dt}</p>
      <img src={icon} alt='icon' style={{ width: '100px', height: '90px' }} />
      <p>
        {dayProps[4].main.temp.toFixed(1)}
        °C
      </p>
      <Button onClick={handleOpen} style={{ color: 'black' }}>Show hourly forecast</Button>
      <BasicModal dayProps={dayProps} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Card>
  );
};
export default SingleDayForecast;
