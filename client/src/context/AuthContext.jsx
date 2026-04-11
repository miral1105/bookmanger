import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const baseUrl = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['x-auth-token'] = token;
            setIsAuthenticated(true);
        } else {
            delete axios.defaults.headers.common['x-auth-token'];
            setIsAuthenticated(false);
        }
        setLoading(false);
    }, [token]);

    const login = async (email, password) => {
        try {
            const res = await axios.post(`${baseUrl}/api/users/login`, { email, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            toast.success('Successfully logged in!');
        } catch (err) {
            const msg = err.response?.data?.msg || 'Login failed';
            toast.error(msg);
            throw err;
        }
    };

    const register = async (email, password) => {
        try {
            const res = await axios.post(`${baseUrl}/api/users/register`, { email, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            toast.success('Registration successful! Welcome aboard.');
        } catch (err) {
            const msg = err.response?.data?.msg || 'Registration failed';
            toast.error(msg);
            throw err;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        toast.success('Successfully logged out.');
    };

    return (
        <AuthContext.Provider value={{ token, isAuthenticated, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
