// src/components/Header.jsx
import React, { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import IMG from "../assets/my pic.jpeg"
const Header = ({ toggleSidebar }) => {
    const { currentUser } = useAuth();
    const [notifications, setNotifications] = useState([
        { id: 1, text: 'New lead assigned to you', time: '5m ago' },
        { id: 2, text: 'Appointment confirmed with Sarah Johnson', time: '1h ago' },
        { id: 3, text: 'Property listing update required', time: '3h ago' },
    ]);
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
            <div className="flex items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                    {window.location.pathname === "/" && "Dashboard"}
                    {window.location.pathname === "/leads" && "Lead Management"}
                    {window.location.pathname === "/calendar" && "Calendar & Appointments"}
                    {window.location.pathname === "/properties" && "Property Database"}
                    {window.location.pathname === "/settings" && "System Settings"}
                </h2>
            </div>

            <div className="flex items-center">
                <div className="relative mr-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>

                <div className="relative mr-4">
                    <button
                        className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                        onClick={() => setShowNotifications(!showNotifications)}
                    >
                        <Bell className="h-6 w-6" />
                        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                    </button>

                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200">
                            <div className="px-4 py-2 border-b border-gray-200">
                                <h3 className="text-sm font-semibold text-gray-700">Notifications</h3>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                                {notifications.map((notification) => (
                                    <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                                        <p className="text-sm text-gray-800">{notification.text}</p>
                                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="px-4 py-2 text-center">
                                <button className="text-sm text-blue-600 hover:text-blue-800">
                                    View all notifications
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center">
                    <img
                        className="h-8 w-8 rounded-full border-2 border-blue-500"
                        src={currentUser?.avatar || IMG}
                        alt="User avatar"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-800">
                        {currentUser?.name || 'User'}
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;