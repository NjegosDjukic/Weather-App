import React from 'react';
import { Box, Modal } from '@mui/material/';
import {
  AreaChart,
  Tooltip,
  Area,
  XAxis,
  YAxis
} from 'recharts';
import { format } from 'date-fns';
import CustomTooltip from './CustomTooltip';

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

const BasicModal = ({ dayProps, isOpen, setIsOpen }) => {
  const currentDate = format(new Date(dayProps[0].dt_txt), 'dd/MM/yy');
  const data = [];

  for (let i = 0; i < dayProps.length; i++) {
    const date = format(new Date(dayProps[i].dt_txt), 'HH:mm');
    data.push({
      name: date, temperature: dayProps[i].main.temp, pv: 40, amt: 2400
    });
  }

  const closeModal = (e, reason) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      setIsOpen(false);
    }
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box sx={style}>
        <AreaChart
          width={700}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}>
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' />
          <YAxis tickCount={7} tickFormatter={(number) => `${number}°`} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type='monotone'
            dataKey='temperature'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#colorUv)' />
        </AreaChart>
        <span style={{ fontSize: '20px' }}>
          Hourly forecast for
          {currentDate}
        </span>
      </Box>
    </Modal>
  );
};
export default BasicModal;
