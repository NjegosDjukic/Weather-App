import React, { forwardRef } from 'react';
import { Box } from '@mui/material';

const styles = {
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
// eslint-disable-next-line
export const ModalBox = forwardRef(({ children }, ref) => (
  <Box sx={styles}>
    {children}
  </Box>
));
