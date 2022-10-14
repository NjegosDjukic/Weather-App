import { useState } from 'react';
import {Box,Modal,Button, Dialog, DialogContent} from '@mui/material/';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { format } from 'date-fns';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

const BasicModal = ({dayProps}) => {
    const [open,setOpen] = useState(false);    
    const handleOpen = ()=> setOpen(true);
    const handleClose = () => setOpen(false);
    
    const currentDate = format(new Date(dayProps[0].dt * 1000),'dd/MM/yy')

    const data = [
        {name: '00:00', uv: dayProps[0].main.temp, pv: 40, amt: 2400},
        {name: '03:00', uv: dayProps[1].main.temp, pv: 40, amt: 2400},
        {name: '06:00', uv: dayProps[2].main.temp, pv: 40, amt: 2400},
        {name: '09:00', uv: dayProps[3].main.temp, pv: 40, amt: 2400},
        {name: '12:00', uv: dayProps[4].main.temp, pv: 40, amt: 2400},
        {name: '15:00', uv: dayProps[5].main.temp, pv: 40, amt: 2400},
        {name: '18:00', uv: dayProps[6].main.temp, pv: 40, amt: 2400},
        {name: '21:00', uv: dayProps[7].main.temp, pv: 40, amt: 2400}
    ];

  return (
    <>
        <Button onClick={handleOpen}>Show hourly forecast</Button>
        <Modal
            open={open}
            onClose={() => handleClose()}
        >
            <Box sx={style}>
                <LineChart width={500} height={300} data={data} >
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
                <span style={{fontSize: '20px'}}>Hourly forecast for {dayProps[0].day}, {currentDate}</span>
            </Box>
        </Modal>
    </>
  );
}
export default BasicModal;