import React from 'react';

const ModalFooter = ({ currentDate }) => (
  <span style={{ fontSize: '20px' }}>
    Hourly forecast for
    {currentDate}
  </span>
);
export default ModalFooter;
