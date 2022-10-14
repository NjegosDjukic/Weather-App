import './App.css';
import { getCurrentDayWeather, getForecast } from './services/getWeather';
import { useQuery } from 'react-query'
import CurrentDay from './components/CurrentDay';
import Forecast from './components/Forecast';

const App = () => {

  const { data } = useQuery('weatherData', getCurrentDayWeather);
  const { data : forecastData } = useQuery('forecastData', getForecast);

  console.log(forecastData);

  return (
     <div className='container'>
        {data && <CurrentDay data={data.data}/>}
        {forecastData && <Forecast data={forecastData.data} />}
     </div>
  );
}
export default App;
