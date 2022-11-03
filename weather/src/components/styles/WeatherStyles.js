import styled from 'styled-components';
import { Typography } from '@mui/material';

export const HeaderWrap = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`;
export const Container = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 4px solid silver;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.3);
  position: relative;
`;
export const Username = styled.p`
  color: white;
  margin-right: 10px;
  font-size: 20px;
`;
export const User = styled.div`
  display: flex;
  height: 70%;
  align-items: center;
`;
export const ErrorMessage = styled(Typography)`
  font-size: 32px !important;
`;
