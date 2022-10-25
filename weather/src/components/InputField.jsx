import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { TextField } from '@mui/material';

const InputField = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <div className='input-wrap'>
      <TextField {...props} {...field} variant='outlined' />
      <ErrorMessage component='div' name={field.name} style={{ color: 'red' }} />
    </div>
  );
};
export default InputField;
