import React from 'react';
import {
  AreaChart,
  Tooltip,
  Area,
  XAxis,
  YAxis
} from 'recharts';
import CustomTooltip from './CustomTooltip';

const Chart = ({ data }) => (

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
);
export default Chart;
