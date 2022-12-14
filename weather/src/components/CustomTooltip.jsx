import React from 'react';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p>
          {payload[0].value.toFixed(1)}
          °C
        </p>
      </div>
    );
  }
  return null;
};
export default CustomTooltip;
