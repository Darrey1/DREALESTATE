// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { LineChart, BarChart, PieChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Bar, Pie, Cell } from 'recharts';
import { MessageSquare, Calendar, User, Check, Clock, AlertCircle } from 'lucide-react';
import ChatInterface from '../components/ChatInterface';

const Dashboard = () => {
    const [leadStats, setLeadStats] = useState({
        total: 145,
        new: 24,
        qualified: 38,
        appointments: 12
    });

    const [chatOpen, setChatOpen] = useState(false);

    const leadActivityData = [
        { name: 'Mon', leads: 4 },
        { name: 'Tue', leads: 6 },
        { name: 'Wed', leads: 8 },
        { name: 'Thu', leads: 12 },
        { name: 'Fri', leads: 9 },
        { name: 'Sat', leads: 5 },
        { name: 'Sun', leads: 3 },
    ];

    const leadsSourceData = [
        { name: 'Website', value: 45 },
        { name: 'Referral', value: 28 },
        { name: 'Social Media', value: 18 },
        { name: 'Email', value: 12 },
        { name: 'Other', value: 6 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    const upcomingAppointments = [
        { id: 1, name: 'Sarah Johnson', property: 'Golden Gate Residence', time: '10:00 AM', date: 'Today', status: 'confirmed' },
        { id: 2, name: 'Michael Chen', property: 'Sunset Apartments', time: '2:30 PM', date: 'Today', status: 'pending' },
        { id: 3, name: 'Jessica Rodriguez', property: 'Harbor View Lofts', time: '11:15 AM', date: 'Tomorrow', status: 'confirmed' },
    ];

    const recentLeads = [
        { id: 1, name: 'Robert Smith', email: 'robert@example.com', phone: '(555) 123-4567', interest: 'Buying', status: 'New', time: '35 min ago' },
        { id: 2, name: 'Emma Davis', email: 'emma@example.com', phone: '(555) 987-6543', interest: 'Renting', status: 'Qualified', time: '2 hours ago' },
        { id: 3, name: 'Jason Lee', email: 'jason@example.com', phone: '(555) 456-7890', interest: 'Selling', status: 'Contacted', time: '5 hours ago' },
    ];

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                            <User className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-500">Total Leads</h3>
                            <p className="text-2xl font-semibold text-gray-800">{leadStats.total}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <span className="text-green-500 text-sm font-medium">↑ 12%</span>
                            <span className="ml-2 text-xs text-gray-500">from last month</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-green-100 text-green-600">
                            <User className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-500">New Leads</h3>
                            <p className="text-2xl font-semibold text-gray-800">{leadStats.new}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <span className="text-green-500 text-sm font-medium">↑ 5%</span>
                            <span className="ml-2 text-xs text-gray-500">from last week</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                            <Check className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-500">Qualified Leads</h3>
                            <p className="text-2xl font-semibold text-gray-800">{leadStats.qualified}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <span className="text-green-500 text-sm font-medium">↑ 8%</span>
                            <span className="ml-2 text-xs text-gray-500">from last month</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-amber-100 text-amber-600">
                            <Calendar className="h-6 w-6" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-sm font-medium text-gray-500">Appointments</h3>
                            <p className="text-2xl font-semibold text-gray-800">{leadStats.appointments}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <span className="text-green-500 text-sm font-medium">↑ 3%</span>
                            <span className="ml-2 text-xs text-gray-500">from last week</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Lead Activity</h3>
                    <div className="h-80">
                        <LineChart width={500} height={300} data={leadActivityData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="leads" stroke="#3B82F6" activeDot={{ r: 8 }} />
                        </LineChart>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Lead Sources</h3>
                    <div className="h-80 flex justify-center">
                        <PieChart width={400} height={300}>
                            <Pie
                                data={leadsSourceData}
                                cx={200}
                                cy={150}
                                labelLine={false}
                                outerRadius={120}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {leadsSourceData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Upcoming Appointments</h3>
                        <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                    </div>
                    <div className="space-y-3">
                        {upcomingAppointments.map((appointment) => (
                            <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                                <div className="flex items-center">
                                    <div className="p-2 rounded-full bg-gray-100">
                                        <User className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-800">{appointment.name}</p>
                                        <p className="text-xs text-gray-500">{appointment.property}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-gray-800">{appointment.time}</p>
                                    <p className="text-xs text-gray-500">{appointment.date}</p>
                                </div>
                                <div>
                                    {appointment.status === 'confirmed' ? (
                                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Confirmed</span>
                                    ) : (
                                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Recent Leads</h3>
                        <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                    </div>
                    <div className="space-y-3">
                        {recentLeads.map((lead) => (
                            <div key={lead.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                                <div className="flex items-center">
                                    <div className="p-2 rounded-full bg-gray-100">
                                        <User className="h-6 w-6 text-gray-600" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-800">{lead.name}</p>
                                        <p className="text-xs text-gray-500">{lead.email} • {lead.phone}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-700">{lead.interest}</p>
                                    <p className="text-xs text-gray-500">{lead.time}</p>
                                </div>
                                <div>
                                    {lead.status === 'New' && (
                                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">New</span>
                                    )}
                                    {lead.status === 'Qualified' && (
                                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Qualified</span>
                                    )}
                                    {lead.status === 'Contacted' && (
                                        <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">Contacted</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI Assistant Button */}
            <div className="fixed bottom-6 right-6">
                <button
                    onClick={() => setChatOpen(!chatOpen)}
                    className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
                >
                    <MessageSquare className="h-8 w-8" />
                </button>
            </div>

            {/* AI Chat Interface */}
            {chatOpen && (
                <div className="fixed bottom-24 right-6 w-96 h-96 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    <ChatInterface onClose={() => setChatOpen(false)} />
                </div>
            )}
        </div>
    );
};

export default Dashboard;