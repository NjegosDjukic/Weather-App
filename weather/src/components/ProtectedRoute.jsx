import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // eslint-disable-next-line
  useEffect(() => {
    if (!user) {
      return navigate('/signin');
    }
  }, [ user, navigate ]);
  return children;
};
export default ProtectedRoute;
