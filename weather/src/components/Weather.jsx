import React from 'react';
import { useQuery } from 'react-query';
import CurrentDay from './CurrentDay';
import Forecast from './Forecast';
import { getCurrentDayWeather, getWeekForecast } from '../services/getWeather';

const Weather = () => {

    const { data } = useQuery('currentDayForecast', getCurrentDayWeather);
    const { data : weekForecastData } = useQuery('weekForecast', getWeekForecast);
  
    return (
     <div> 
        <div className='container'>
            {data && <CurrentDay data={data.data}/>}
        </div>
        <div>
            {weekForecastData && <Forecast data={weekForecastData.data} />} 
        </div>
  </div> 
  )
}
export default Weather;