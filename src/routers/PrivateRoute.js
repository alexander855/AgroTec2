import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';


export default function PrivateRoute({hasRole: role, ...props}) {
  const location = useLocation();
  const {hasRole, isLogged} = useAuth();

  if(role && !hasRole(role)) return <Redirect to={routes.home}/>
  if(!isLogged()) return <Redirect to={{ pathname: routes.login, state: { from: location }}}/>
  return (
    <Route {...props}/>
   )

}
