import './App.css';
import { getCurrentDayWeather, getWeekForecast } from './services/getWeather';
import { useQuery } from 'react-query';
import CurrentDay from './components/CurrentDay';
import Forecast from './components/Forecast';

const App = () => {
  
  const { data } = useQuery('currentDayForecast', getCurrentDayWeather);
  const { data : weekForecastData } = useQuery('weekForecast', getWeekForecast);

  return (
   <div>
     <div className='container'>
        {data && <CurrentDay data={data.data}/>}
     </div>
        {weekForecastData && <Forecast data={weekForecastData.data} />}
   </div>
  );
}
export default App;
