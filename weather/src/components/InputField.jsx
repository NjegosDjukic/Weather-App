import React from 'react';
import { useField, ErrorMessage } from 'formik';
import { InputWrap, Input } from './styles/FormStyles';

const InputField = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <InputWrap>
      <Input {...props} {...field} variant='outlined' />
      <ErrorMessage component='div' name={field.name} style={{ color: 'red' }} />
    </InputWrap>
  );
};
export default InputField;
