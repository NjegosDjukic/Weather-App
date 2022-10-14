import { format } from 'date-fns';
import Day from './Day';

const Forecast = ({data}) => {
    
    const forecast = data.list.slice(5)
    const day1= forecast.slice(0,8)
    const day2= forecast.slice(8,15);
    const day3= forecast.slice(15,22);
    const day4= forecast.slice(22,29);

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