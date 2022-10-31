import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Weather from './components/Weather';
import SignIn from './components/SignIn';
import AuthContextProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import GlobalStyle from './components/styles/GlobalStyles';

const App = () => (

  <AuthContextProvider>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Signup />} />
      <Route
        path='/weather'
        element={<ProtectedRoute><Weather /></ProtectedRoute>} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  </AuthContextProvider>
);
export default App;
