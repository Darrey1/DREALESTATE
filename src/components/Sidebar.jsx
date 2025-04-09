// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Calendar, Building, Settings, Menu, X, Bot } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from "../assets/therealestate.png"
const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();
    const { currentUser, logout } = useAuth();

    const navItems = [
        { name: 'Dashboard', path: '/', icon: <Home className="w-5 h-5" /> },
        { name: 'Leads', path: '/leads', icon: <Users className="w-5 h-5" /> },
        { name: 'Calendar', path: '/calendar', icon: <Calendar className="w-5 h-5" /> },
        { name: 'ChatBot', path: '/chat', icon: <Bot className="w-5 h-5" /> },
        { name: 'Properties', path: '/properties', icon: <Building className="w-5 h-5" /> },
        { name: 'Settings', path: '/settings', icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className={`${isOpen ? 'w-64' : 'w-20'} bg-blue-900 text-white transition-all duration-300 flex flex-col`}>
            <div className="flex items-center justify-between p-4 border-b border-blue-800">
                <div className="flex items-center space-x-2">
                    {isOpen ? (
                        <>
                            <img src={Logo} alt="Logo" className="w-6 h-6" />
                            <h1 className="text-xl font-bold">DREALESTATE</h1></>

                    ) : (
                        <span className="text-xl font-bold">RE</span>
                    )}
                </div>
                <button onClick={toggleSidebar} className="text-white focus:outline-none">
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>


            <div className="flex-1 overflow-y-auto">
                <nav className="mt-8">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.name} className="mb-2">
                                <Link
                                    to={item.path}
                                    className={`flex items-center px-4 py-3 ${location.pathname === item.path
                                        ? 'bg-blue-800 text-white'
                                        : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                                        } transition-colors duration-200 ease-in-out`}
                                >
                                    <span className="mr-3">{item.icon}</span>
                                    {isOpen && <span>{item.name}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="p-4 border-t border-blue-800">
                <div className="flex items-center">
                    {currentUser && (
                        <>
                            <img
                                className="w-8 h-8 rounded-full"
                                src={currentUser.avatar}
                                alt="User avatar"
                            />
                            {isOpen && (
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-white">{currentUser.name}</p>
                                    <button
                                        onClick={logout}
                                        className="text-xs text-blue-300 hover:text-white"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;