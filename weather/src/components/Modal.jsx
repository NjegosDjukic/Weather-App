import { Box,Modal } from '@mui/material/';
import { AreaChart,Tooltip,Area, XAxis, YAxis, Label } from 'recharts';
import { format } from 'date-fns';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{payload[0].value.toFixed(1)}°C</p>
      </div>
    );
  }
  return null;
};

const BasicModal = ({dayProps,open,setOpen}) => {
   
    const currentDate = format(new Date(dayProps[0].dt * 1000),'dd/MM/yy/eeee')
   
    const data = [
        {name: '00:00', temperature: dayProps[0].main.temp, pv: 40, amt: 2400},
        {name: '03:00', temperature: dayProps[1].main.temp, pv: 40, amt: 2400},
        {name: '06:00', temperature: dayProps[2].main.temp, pv: 40, amt: 2400},
        {name: '09:00', temperature: dayProps[3].main.temp, pv: 40, amt: 2400},
        {name: '12:00', temperature: dayProps[4].main.temp, pv: 40, amt: 2400},
        {name: '15:00', temperature: dayProps[5].main.temp, pv: 40, amt: 2400},
        {name: '18:00', temperature: dayProps[6].main.temp, pv: 40, amt: 2400},
        {name: '21:00', temperature: dayProps[7].main.temp, pv: 40, amt: 2400}
    ];
    const closeModal = (event,reason) => {
        if(reason === 'backdropClick' || reason==='escapeKeyDown') setOpen(false)
    } 

  return (
    <>
      <Modal open={open} onClose ={closeModal}>
        <Box  sx={style} >
          <AreaChart 
            width={700} 
            height={500} 
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              </defs>
              <XAxis dataKey="name"  />
              <YAxis tickCount={7} tickFormatter={(number) => `${number}°`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="temperature" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
            <span style={{fontSize: '20px'}}>Hourly forecast for {currentDate}</span>
        </Box>
        </Modal>
    </>
  );
}
export default BasicModal;
