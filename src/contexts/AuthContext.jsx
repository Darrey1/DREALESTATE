// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import IMG from "../assets/my pic.jpeg"
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
            setCurrentUser({
                id: '1',
                name: 'Dare Timlieyin',
                email: 'daretimileyin1@gmail.com',
                role: 'agent',
                avatar: IMG
            });
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            if (email === "dare@gmail.com" && password === "12345") {
                // Store token
                localStorage.setItem('authToken', 'demo-token');
                setCurrentUser({
                    id: '1',
                    name: 'Dare Timlieyin',
                    email: 'daretimileyin1@gmail.com',
                    role: 'agent',
                    avatar: IMG
                });
                setIsAuthenticated(true);
                return true;
            }
            return false;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setCurrentUser(null);
        setIsAuthenticated(false);
    };

    const value = {
        currentUser,
        isAuthenticated,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};