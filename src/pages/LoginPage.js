import React from 'react'
import useAuth from '../auth/useAuth'
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

const userCredentials = {};

export default function LoginPage() {
  const location = useLocation();
  const {login} =useAuth();


  return (
    <div>
        <h1>LoginPage</h1>
        <button onClick={() => login(userCredentials, location.state?.from)}>Iniciar sesion</button>

    </div>
        
  )
}
