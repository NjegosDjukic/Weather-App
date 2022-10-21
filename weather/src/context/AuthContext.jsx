import { createContext, useState, useContext, useEffect } from 'react';
import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        signInWithPopup,
        GoogleAuthProvider,
        onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const signUpWithEmailAndPassword = async(data) => {
       return await createUserWithEmailAndPassword(auth,data.email,data.password)
    }
    const logInWithEmailAndPassword = async(data) => {
        return await signInWithEmailAndPassword(auth,data.email,data.password)
    }
    const logout = async() => {
      return await signOut(auth)
  }
    const signInWithGoogle = async() => {
        return await signInWithPopup(auth, provider).then(() => navigate('/weather'))
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentuser => {
        setUser(currentuser);
      });
      return () => {
        unsubscribe();
      };
    }, []);

      const values = {
        user,
        signUpWithEmailAndPassword,
        logInWithEmailAndPassword,
        logout,
        signInWithGoogle
      }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}