import BasicModal from './Modal';

const Day = ({dayProps}) => {

   
  return (
    <div className='day'>
        <p style={{fontSize: '24px'}}>{dayProps[4].day}</p>
        <img src ={`http://openweathermap.org/img/w/${dayProps[4].weather[0].icon}.png`} alt='' className='day-icon' />
        <p>{dayProps[4].main.temp.toFixed(1)}°C</p>
        <BasicModal dayProps={dayProps} />
    </div>
  )
}
export default Day;