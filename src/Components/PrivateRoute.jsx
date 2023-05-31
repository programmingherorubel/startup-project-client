import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from './Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading,user} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loading/>
    }

    if(user?.email){
        return children
    }

    return <Navigate  state={{from:location}} to='/login' replace></Navigate>


};

export default PrivateRoute;