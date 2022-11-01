import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormLabel, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { validateSignIn } from '../validation/validate';
import { signInInputs } from '../data/inputs';
import { useAuth } from '../context/AuthContext';
import InputField from './InputField';
import {
  Form,
  /* ErrorMessage, */
  SubmitButton,
  GoogleButton
} from './styles/FormStyles';

const SignIn = () => {
  const { logInWithEmailAndPassword, signInWithGoogle } = useAuth();
  const [ errorMessage, setErrorMessage ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await logInWithEmailAndPassword(data)
        .then(() => {
          navigate('/weather');
          setErrorMessage('');
        });
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setErrorMessage('Wrong password');
      } else if (error.code === 'auth/user-not-found') {
        setErrorMessage('Email not found');
      }
    }
  };

  const googleLogIn = () => {
    signInWithGoogle()
      .then(() => navigate('/weather'));
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={handleSubmit}
      validationSchema={validateSignIn}>
      <Form>
        <FormLabel sx={{ fontSize: '24px' }}>Sign in</FormLabel>
        {signInInputs.map((input) => (
          <InputField key={input.id} {...input} />
        ))}
        <div style={{ width: '80%', marginBottom: '10px' }}>
          {
            errorMessage
            && (
              <Alert severity='error'>
                <span style={{ color: 'red', fontSize: '16px' }}>{errorMessage}</span>
              </Alert>
            )
          }
        </div>
        <SubmitButton variant='contained' type='submit'>Sign in</SubmitButton>
        <GoogleButton onClick={googleLogIn} />
        <span>
          You dont have an account ?
          <Link to='/' style={{ color: '#1976d2' }}>Sign up</Link>
        </span>
      </Form>
    </Formik>
  );
};
export default SignIn;
