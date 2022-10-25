import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Button, FormLabel } from '@mui/material';
import { signUpInputs } from '../data/inputs';
import { validateSignUp } from '../validation/validate';
import { useAuth } from '../context/AuthContext';
import InputField from './InputField';

const SignUp = () => {
  const navigate = useNavigate();
  const { signUpWithEmailAndPassword } = useAuth();
  const [ errorMessage, setErrorMessage ] = useState();

  const handleSubmit = async (data) => {
    try {
      await signUpWithEmailAndPassword(data)
        .then(() => {
          navigate('/weather');
          setErrorMessage('');
        });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('Email already exists');
      }
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        password: '',
        email: ''
      }}
      onSubmit={handleSubmit}
      validationSchema={validateSignUp}>
      <Form>
        <FormLabel sx={{ fontSize: '24px' }}>Sign up</FormLabel>
        {signUpInputs.map((input) => (
          <InputField key={input.id} {...input} />
        ))}
        <div style={{ width: '80%' }}>
          <p className='sign-error-message'>{errorMessage}</p>
        </div>
        <Button variant='contained' type='submit' className='submit-button'>Sign up</Button>
        <span>
          Already have an account ?
          <Link to='/signin'>Sign in</Link>
        </span>
      </Form>
    </Formik>
  );
};
export default SignUp;
