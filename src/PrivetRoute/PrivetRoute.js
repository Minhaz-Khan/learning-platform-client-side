import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {

    const location = useLocation()
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    if (loading) {
        return <DotLoader className='mx-auto mt-60' color="#36d7b7" />
    }
    if (user && user.uid) {
        return children;
    }

    return (
        <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    );
};

export default PrivetRoute;