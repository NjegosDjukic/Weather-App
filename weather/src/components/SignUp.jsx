import React, { useState } from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { FormLabel, Alert } from '@mui/material';
import { updateProfile } from 'firebase/auth';
import { signUpInputs } from '../data/inputs';
import { validateSignUp } from '../validation/validate';
import { useAuth } from '../context/AuthContext';
import InputField from './InputField';
import { auth } from '../firebase/firebase-config';
import { Form, SubmitButton } from './styles/FormStyles';

const SignUp = () => {
  const navigate = useNavigate();
  const { signUpWithEmailAndPassword } = useAuth();
  const [ errorMessage, setErrorMessage ] = useState();

  const handleSubmit = async (data) => {
    try {
      await signUpWithEmailAndPassword(data)
        .then(async () => {
          await updateProfile(auth.currentUser, { displayName: `${data.firstName} ${data.lastName}` });
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
        <SubmitButton type='submit' variant='contained'>Sign up</SubmitButton>
        <span>
          Already have an account ?
          <Link to='/signin' style={{ color: '#1976d2' }}>Sign in</Link>
        </span>
      </Form>
    </Formik>
  );
};
export default SignUp;
