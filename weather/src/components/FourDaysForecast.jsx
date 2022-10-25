/* eslint-disable indent */
/* eslint-disable array-callback-return */
import React from 'react';
import { format } from 'date-fns';
import SingleDayForecast from './SingleDayForecast';

const Forecast = ({ data }) => {
  const currentDay = format(new Date(), 'EEEE');

  // eslint-disable-next-line
  const forecast = data.list.map((item) => {
    return { ...item, dt: format(new Date(item.dt_txt), 'EEEE') };
  });
  const forecastWithoutCurrentDay = forecast.filter((item) => item.dt !== currentDay);

  const weekForecast = [];
  for (let i = 0; i < 32; i += 8) {
    weekForecast.push(forecastWithoutCurrentDay.slice(i, i + 8));
  }

  return (
    <div className='days'>
      {weekForecast.map((day, index) => (
        // eslint-disable-next-line
        <SingleDayForecast dayProps={day} key={index} />
      ))}
    </div>
  );
};
export default Forecast;
