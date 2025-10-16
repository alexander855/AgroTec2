import React from 'react'
import { createContext, useState } from "react";
import roles from '../helpers/roles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

export const AuthContext = createContext()

export default function AuthProvider( { children } ) {
    //const [user, setUser] = useState(null);
    const history = useHistory();

    const [user, setUser] = useState (null)

  
    const login = (userCredentials, fromLocation) => {
      setUser({id: 1, name: 'Alexander', email:'Alex@gmail.com', role: roles.admin});
      if (fromLocation) {
        history.push(fromLocation);
      }
    };

    const logout = () => setUser(null);

    const updateUser = (data) => {
      setUser ({
        ...user,
        ...data
      })
    }
    

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role; 

    const contextValue = {
        user,
        updateUser,
        isLogged,
        hasRole,
        login,
        logout
    }
  return (
    <AuthContext.Provider value={contextValue}>
       {children}
    </AuthContext.Provider>
  )
}
