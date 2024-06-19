import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function GoogleAuth() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get('token');
        const role = queryParams.get('role');
        const error = queryParams.get('error');
        console.log(token)
        if (error) {
            console.error('OAuth error:', error);
            navigate('/error', { replace: true });
        } else if (token) {
            console.log('OAuth token:', token);
            // Store the token in localStorage or a global state
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            navigate('/', { replace: true });
        }
    }, [location, navigate]);

    return (
        <>
            <h1>Connecting to Google server...</h1>
        </>
    );
}
