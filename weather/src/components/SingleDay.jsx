import { useState } from 'react';
import BasicModal from './Modal';
import { Button } from '@mui/material/';
import { useEffect } from 'react';
import { getIcon } from '../getIcon';

const Day = ({dayProps}) => {

  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [icon, setIcon] = useState();
  
  useEffect(() => setIcon(getIcon(dayProps[4].weather[0].icon)),[dayProps])
        
  return (
    <div className='day'>
      <p style={{fontSize: '24px'}}>{dayProps[4].day}</p>
      <img src ={icon} alt='' className='day-icon' />
      <p>{dayProps[4].main.temp.toFixed(1)}°C</p>
      <Button onClick={handleOpen} style={{color: 'black'}}>Show hourly forecast</Button>
      <BasicModal dayProps={dayProps} open={open} setOpen={setOpen} />
    </div>
  )
}
export default Day;