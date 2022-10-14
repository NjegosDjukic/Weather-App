import React from 'react'

const Day = ({dayProps}) => {
    
  return (
    <div className='day'>
        <p style={{fontSize: '24px'}}>{dayProps[4].day}</p>
        <img src ={`http://openweathermap.org/img/w/${dayProps[4].weather[0].icon}.png`} className='day-icon' />
        <p>{dayProps[4].main.temp.toFixed(1)}°C</p>
    </div>
  )
}
export default Day;