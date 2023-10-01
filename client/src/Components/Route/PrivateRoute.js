import React from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from '../../utils/isLogin';

const PrivateRoute = ({ Children }) => {
  return !isLogin ? <Navigate to="/Landing" /> : Children;
};

export default PrivateRoute;
