import React from 'react';

const CurrentDay = (data) => {

    return (
      <div className='header'>
        <div className='block1'>
          <img src={`http://openweathermap.org/img/w/${data.data.weather[0].icon}.png`} alt='' className='icon' />
         </div>
        <div className='block2'>
          <span style={{fontSize : '24px'}}>Today</span>
          <h1>{data.data.name}</h1>
          <p style={{fontSize: '24px'}}>Temperature: {data.data.main.temp.toFixed(1)}°C </p>
          <p style={{fontSize: '24px'}}>{data.data.weather[0].main}</p>
        </div>
      </div>
    )
}
export default CurrentDay;