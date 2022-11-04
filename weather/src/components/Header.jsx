/* eslint-disable */
import React from 'react';
import { Formik } from 'formik';
import { Button } from '@mui/material';
import { validateCityName } from '../validation/validate';
import { SearchWrap } from './styles/FormStyles';
import SearchField from './SearchField';
import { Username, User, HeaderWrap } from './styles/WeatherStyles';
import { useAuth } from '../context/AuthContext';

const Header = ({ handleSubmit }) => {
  const { logout, user } = useAuth();

  return (
    <HeaderWrap>
      <Formik
        initialValues={{
          cityName: ''
        }}
        validationSchema={validateCityName}
        onSubmit={handleSubmit}>
        <SearchWrap>
          <SearchField name='cityName' placeholder='Enter a city name' variant='outlined' />
          <Button type='submit' variant='contained'>Search</Button>
        </SearchWrap>
      </Formik>
      <User>
        <Username>{user && user.displayName}</Username>
        <Button onClick={logout} variant='contained'>Log out</Button>
      </User>
    </HeaderWrap>
  );
};
export default Header;
