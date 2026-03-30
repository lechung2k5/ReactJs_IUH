import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function ProtectedRoute() {
    const { user } = useContext(AuthContext);

    // Nếu chưa đăng nhập, tự động chuyển hướng về trang /login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Nếu đã đăng nhập, cho phép render các route con (VD: /profile, /orders)
    return <Outlet />;
}

export default ProtectedRoute;
