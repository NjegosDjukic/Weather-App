import React, {
  createContext,
  useState,
  useContext,
  useEffect
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase-config';

const AuthContext = createContext();
// eslint-disable-next-line
const AuthContextProvider = ({ children }) => {
  const [ user, setUser ] = useState({});
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const signUpWithEmailAndPassword = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password);
  };
  const logInWithEmailAndPassword = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
  };
  const logout = async () => {
    await signOut(auth);
  };
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).then(() => navigate('/weather'));
  };

  useEffect(() => {
    // eslint-disable-next-line
    const unsubscribe = onAuthStateChanged(auth, currentuser => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // eslint-disable-next-line
  const values = {
    user,
    signUpWithEmailAndPassword,
    logInWithEmailAndPassword,
    logout,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
