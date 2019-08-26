import React, { useState, useEffect } from 'react';
import firebase from './Firebase';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);
  return (
    <AppContext.Provider value={{ currentUser }}>
      {children}
    </AppContext.Provider>
  );
};
