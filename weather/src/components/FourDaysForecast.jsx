import React from 'react';
import { format } from 'date-fns';
import SingleDayForecast from './SingleDayForecast';
import { CardsWrap } from './styles/CardStyles';

const FourDayForecast = (data) => {
  const currentDay = format(new Date(), 'EEEE');

  // eslint-disable-next-line
  const forecast = data?.data?.data?.list?.map((item) => {
    return { ...item, dt: format(new Date(item.dt_txt), 'EEEE') };
  });

  const forecastWithoutCurrentDay = forecast?.filter((item) => item.dt !== currentDay);

  const weekForecast = [];
  for (let i = 0; i < 32; i += 8) {
    weekForecast.push(forecastWithoutCurrentDay?.slice(i, i + 8));
  }

  return (
    <CardsWrap>
      {weekForecast?.map((dayProps, index) => (
        // eslint-disable-next-line
        <SingleDayForecast dayProps={dayProps} key={index} />
      ))}
    </CardsWrap>
  );
};
export default FourDayForecast;
