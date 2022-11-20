import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthUserContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user with email password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   user login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   user signOut
  const logOut = () => {
    return signOut(auth);
  };

  // update user
  const userProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // google login
  const googleLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // frogot passwore

  const forgetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  // hold user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    user,
    logOut,
    userProfile,
    loading,
    googleLogin,
    forgetPassword,
  };
  return (
    <AuthUserContext.Provider value={authInfo}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default UserContext;
