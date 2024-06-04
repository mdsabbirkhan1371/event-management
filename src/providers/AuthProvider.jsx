import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const [error, setError] = useState('');

  const [success, setSuccess] = useState('');

  const [loader, setLoader] = useState(true);

  // create user with email and password
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user

  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  // reset password

  const resetPassword = email => {
    setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };

  // user exist or not implement

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const data = {
    user,
    createUser,
    signIn,
    logOut,
    resetPassword,
    error,
    setError,
    setSuccess,
    success,
    setUser,
    loader,
    setLoader,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
