import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = ({ publicPage = false, adminOnly = false }) => {
    const { user } = useSelector((state) => state.auth);
    const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");
    const isSeller = user && user?.roles.includes("ROLE_SELLER");
    const location = useLocation();

    if (publicPage) {
        return user ? <Navigate to="/" /> : <Outlet />
    }

    if (adminOnly) {
        if (isSeller && !isAdmin) {
            const sellerAllowedPaths = ["/admin/orders", "/admin/products"];
            const sellerAllowed = sellerAllowedPaths.some(path => 
                location.pathname.startsWith(path)
            );
            if (!sellerAllowed) {
                return <Navigate to="/" replace />
            }
        }
        
        // If adminOnly route but user is not admin and not seller, redirect
        if (!isAdmin && !isSeller) {
            return <Navigate to="/" replace />
        }
    }

    // For regular private routes, just check if user is logged in
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute
