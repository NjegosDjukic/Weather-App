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
export const SearchWrap = styled(FormStyles)`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
`;
export const Search = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 70%;
  height: 75%;
  justify-content:right;
  display:flex;
  align-items: center;
  input:focus{
    outline: none;
    background: none;
  }
  input:-webkit-autofill:focus,input:-webkit-autofill:not(focus){
    transition: background-color 5000s ease-in-out 0s;
  }
`;
export const InputSearch = styled.input`
  border-radius: 10px;
  width: 90%;
  height: 100%;
  border: none;
`;
