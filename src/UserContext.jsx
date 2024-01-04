// UserContext.js
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState('');

  const handleLoginSuccess = (email) => {
    setUserEmail(email);
  };

  return (
    <UserContext.Provider value={{ userEmail, handleLoginSuccess }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
