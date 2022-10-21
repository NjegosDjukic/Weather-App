import { useQuery } from 'react-query';
import { useAuth } from '../context/AuthContext';
import { getCurrentDayWeather, getWeekForecast } from '../services/getWeather';
import { Button } from '@mui/material'; 
import CurrentDayForecast from './CurrentDayForecast';
import FourDayForecast from './FourDaysForecast';

const Weather = () => {

    const { data } = useQuery('currentDayForecast', getCurrentDayWeather);
    const { data : weekForecastData } = useQuery('weekForecast', getWeekForecast);
    const {logout} = useAuth();
   
    return (
        <div> 
            <div style={{width: '100%',textAlign: 'right'}}>
                <Button onClick={logout} variant="contained" className='logout-button'>Log out</Button>
            </div>
            <div className='container'>
                {data && <CurrentDayForecast data={data.data}/>}
            </div>
            <div>
                {weekForecastData && <FourDayForecast data={weekForecastData.data} />} 
            </div>
        </div> 
    )
}
export default Weather;