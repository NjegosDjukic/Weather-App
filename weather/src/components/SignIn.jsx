import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Button, FormLabel } from '@mui/material';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { validateSignIn } from '../validation/validate';
import { signInInputs } from '../data/inputs';
import { useAuth } from '../context/AuthContext';
import InputField from './InputField';

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
        <div style={{ width: '80%' }}>
          <p className='sign-error-message'>{errorMessage}</p>
        </div>
        <Button variant='contained' type='submit' className='submit-button'>Sign in</Button>
        <GoogleButton className='google-button' onClick={googleLogIn} />
        <span>
          You dont have an account ?
          <Link to='/'>Sign up</Link>
        </span>
      </Form>
    </Formik>
  );
};
export default SignIn;
