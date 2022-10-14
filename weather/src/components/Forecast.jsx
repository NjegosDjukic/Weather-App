import { format } from 'date-fns';
import Day from './Day';

const Forecast = ({data}) => {

  const date = new Date();
  const currentDay = format(new Date(date),'EEEE');
    
  const forecast = data.list.filter(item => item.day !== currentDay);
  const day1= forecast.slice(0,8)
  const day2= forecast.slice(8,16);
  const day3= forecast.slice(16,24);
  const day4= forecast.slice(24,32);

  forecast.forEach((item) => {
    item.day = format(new Date(item.dt * 1000),'EEEE')
  })

    return (
      <div className='days'>
        <Day dayProps={day1} />
        <Day dayProps={day2} />
        <Day dayProps={day3} />
        <Day dayProps={day4} />
      </div>
  )
}
export default Forecast;