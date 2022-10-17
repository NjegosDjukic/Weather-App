import { useState } from 'react';
import BasicModal from './Modal';
import { Button } from '@mui/material/';

const Day = ({dayProps}) => {

  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className='day' >
        <p style={{fontSize: '24px'}}>{dayProps[4].day}</p>
        <img src ={`http://openweathermap.org/img/w/${dayProps[4].weather[0].icon}.png`} alt='' className='day-icon' />
        <p>{dayProps[4].main.temp.toFixed(1)}°C</p>
        <Button onClick={handleOpen} style={{color: 'black'}}>Show daily forecast</Button>
        <BasicModal dayProps={dayProps} open={open} setOpen={setOpen} />
    </div>
  )
}
export default Day;