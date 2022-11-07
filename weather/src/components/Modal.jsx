import React from 'react';
import { Modal } from '@mui/material/';
import { format } from 'date-fns';
import Chart from './Chart';
import { ModalBox } from './styles/ModalStyles';

const BasicModal = ({ dayProps, isOpen, setIsOpen }) => {
  const currentDate = ` ${dayProps && format(new Date(dayProps[0]?.dt_txt), 'dd/MM/yy, EEEE')}`;
  const data = [];
  for (let i = 0; i < dayProps?.length; i++) {
    const date = format(new Date(dayProps[i]?.dt_txt), 'HH:mm');
    data.push({
      name: date, temperature: dayProps[i]?.main?.temp, pv: 40, amt: 2400
    });
  }

  const closeModal = (e, reason) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') {
      setIsOpen(false);
    }
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <ModalBox>
        <Chart data={data} />
        <span style={{ fontSize: '20px' }}>
          Hourly forecast for:
          {currentDate}
        </span>
      </ModalBox>
    </Modal>
  );
};
export default BasicModal;
