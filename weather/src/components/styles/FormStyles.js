import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
import { Form as FormStyles } from 'formik';
import { GoogleButton as Btn } from 'react-google-button';

export const Form = styled(FormStyles)`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
`;
export const Input = styled(TextField)`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
`;
export const SubmitButton = styled(Button)`
  width: 80% !important;
  padding: 10px !important;
  font-size: 16px !important;
`;
export const InputWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;
export const GoogleButton = styled(Btn)`
  width: 80% !important;
  margin: 10px 0;
  height: 44.5px !important;
  text-transform: uppercase;
  font-size: 16px !important;
  div{
    height: 44.5px !important;
    margin: 0 !important;
  }
`;
