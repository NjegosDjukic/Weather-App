import { format } from 'date-fns';
import SingleDay from './SingleDay';

const Forecast = ({data}) => {

  const currentDay = format(new Date(),'EEEE');
  const forecast = data.list.filter(item => item.day !== currentDay);

  forecast.forEach((item) => {
    item.day = format(new Date(item.dt * 1000),'EEEE')
  })
  const weekForecast = [];
  for (var i=0; i<32; i+=8) {
     weekForecast.push(forecast.slice(i,i+ 8));
  }
  
  return (
      <div className='days'>
        {weekForecast.map((day,index) => (
          <SingleDay dayProps={day} key={index}  />
        ))}
      </div>
  )
}
export default Forecast;