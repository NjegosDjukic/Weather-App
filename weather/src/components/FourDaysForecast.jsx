import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useQuery } from 'react-query';
import SingleDayForecast from './SingleDayForecast';
import { CardsWrap } from './styles/CardStyles';
import { getWeekForecast } from '../services/getWeather';

const FourDayForecast = ({ city }) => {
  const { data } = useQuery([ 'weekForecast', city ], () => getWeekForecast(city));
  const [ weekForecastData, setWeekForecastData ] = useState();
  const currentDay = format(new Date(), 'EEEE');

  useEffect(() => {
    if (data) {
      setWeekForecastData(data?.data);
    }
  }, [data]);

  const forecast = weekForecastData?.list?.map((item) => (
    { ...item, dt: format(new Date(item.dt_txt), 'EEEE') }
  ));
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
