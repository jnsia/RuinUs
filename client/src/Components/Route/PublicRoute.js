import React from 'react';
import { Navigate } from 'react-router-dom';
import isLogin from '../../utils/isLogin';

const PublicRoute = ({ Children }) => {
  return isLogin ? <Navigate to="/Home" /> : Children;
};

export default PublicRoute;
