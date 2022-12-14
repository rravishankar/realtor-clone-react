import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import {useAuthStatus} from '../hooks/useAuthStatus';
import Spinner from "./Spinner";

export default function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus();
    if (checkingStatus) {
      // return <h3>Loading...</h3>;
      return <Spinner />;
    }
  return loggedIn ? <Outlet />: <Navigate to="/sign-in" />
}
