// src/pages/Calendar.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, User, MapPin, Phone, Edit, Trash2 } from 'lucide-react';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewMode, setViewMode] = useState('month'); // month, week, day
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            title: 'Property Viewing',
            client: 'Sarah Johnson',
            property: 'Golden Gate Residence',
            date: new Date(2025, 3, 9), // April 9, 2025
            startTime: '10:00 AM',
            endTime: '11:00 AM',
            address: '123 Main St, San Francisco, CA',
            phone: '(555) 123-4567',
            notes: 'Interested in 3-bedroom units with a view'
        },
        {
            id: 2,
            title: 'Offer Discussion',
            client: 'Michael Chen',
            property: 'Sunset Apartments',
            date: new Date(2025, 3, 9), // April 9, 2025
            startTime: '2:30 PM',
            endTime: '3:30 PM',
            address: '456 Park Ave, San Francisco, CA',
            phone: '(555) 234-5678',
            notes: 'Discussing final offer terms'
        },
        {
            id: 3,
            title: 'Initial Consultation',
            client: 'Jessica Rodriguez',
            property: 'Harbor View Lofts',
            date: new Date(2025, 3, 10), // April 10, 2025
            startTime: '11:15 AM',
            endTime: '12:00 PM',
            address: '789 Harbor Dr, San Francisco, CA',
            phone: '(555) 345-6789',
            notes: 'First-time homebuyer consultation'
        }
    ]);

    // Month navigation
    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    // Get days in month
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Get first day of month (0 = Sunday, 1 = Monday, etc.)
    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    // Generate calendar days
    const generateCalendarDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);

        const days = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push({ day: null, isCurrentMonth: false });
        }

        // Add days of the current month
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            const isToday = i === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear();

            const isSelected = i === selectedDate.getDate() &&
                month === selectedDate.getMonth() &&
                year === selectedDate.getFullYear();

            const dayAppointments = appointments.filter(appointment =>
                appointment.date.getDate() === i &&
                appointment.date.getMonth() === month &&
                appointment.date.getFullYear() === year
            );

            days.push({
                day: i,
                isCurrentMonth: true,
                isToday,
                isSelected,
                appointments: dayAppointments,
                date: new Date(year, month, i)
            });
        }

        return days;
    };

    const formatMonth = (date) => {
        return date.toLocaleString('default', { month: 'long', year: 'numeric' });
    };

    const getDayAppointments = (date) => {
        if (!date) return [];

        return appointments.filter(appointment =>
            appointment.date.getDate() === date.getDate() &&
            appointment.date.getMonth() === date.getMonth() &&
            appointment.date.getFullYear() === date.getFullYear()
        );
    };

    return (
        <div className="h-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Calendar & Appointments</h2>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
                    onClick={() => setShowModal(true)}
                >
                    <Plus className="h-5 w-5 mr-2" />
                    New Appointment
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm mb-6">
                <div className="p-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <button
                                onClick={prevMonth}
                                className="p-1 rounded-full hover:bg-gray-100"
                            >
                                <ChevronLeft className="h-5 w-5 text-gray-600" />
                            </button>
                            <h3 className="text-lg font-semibold mx-4">
                                {formatMonth(currentDate)}
                            </h3>
                            <button
                                onClick={nextMonth}
                                className="p-1 rounded-full hover:bg-gray-100"
                            >
                                <ChevronRight className="h-5 w-5 text-gray-600" />
                            </button>
                        </div>

                        <div className="flex rounded-lg overflow-hidden border border-gray-300">
                            <button
                                className={`px-4 py-1.5 text-sm ${viewMode === 'month' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                                onClick={() => setViewMode('month')}
                            >
                                Month
                            </button>
                            <button
                                className={`px-4 py-1.5 text-sm ${viewMode === 'week' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                                onClick={() => setViewMode('week')}
                            >
                                Week
                            </button>
                            <button
                                className={`px-4 py-1.5 text-sm ${viewMode === 'day' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                                onClick={() => setViewMode('day')}
                            >
                                Day
                            </button>
                        </div>
                    </div>
                </div>

                {viewMode === 'month' && (
                    <div className="p-6">
                        {/* Day headers */}
                        <div className="grid grid-cols-7 gap-px mb-2">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                                <div key={index} className="text-center text-sm font-medium text-gray-500 py-2">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Calendar grid */}
                        <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
                            {generateCalendarDays().map((day, index) => (
                                <div
                                    key={index}
                                    className={`bg-white min-h-24 p-1 ${day.isSelected ? 'ring-2 ring-blue-500' : ''
                                        }`}
                                    onClick={() => day.day && setSelectedDate(day.date)}
                                >
                                    {day.day && (
                                        <>
                                            <div className={`text-right ${day.isToday ? 'bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center ml-auto' :
                                                'text-gray-700'
                                                }`}>
                                                {day.isToday ?
                                                    <span className="mx-auto">{day.day}</span> :
                                                    day.day
                                                }
                                            </div>
                                            <div className="mt-1 space-y-1 max-h-20 overflow-hidden">
                                                {day.appointments.slice(0, 3).map((appointment, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="text-xs p-1 rounded truncate bg-blue-100 text-blue-800 border-l-4 border-blue-500"
                                                    >
                                                        {appointment.startTime} - {appointment.title}
                                                    </div>
                                                ))}
                                                {day.appointments.length > 3 && (
                                                    <div className="text-xs text-gray-600 pl-1">
                                                        +{day.appointments.length - 3} more
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Selected day's appointments */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Appointments for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                    </h3>
                </div>

                <div className="space-y-4">
                    {getDayAppointments(selectedDate).length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                            No appointments scheduled for this day
                        </div>
                    ) : (
                        getDayAppointments(selectedDate).map(appointment => (
                            <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-semibold text-gray-800">{appointment.title}</h4>
                                        <div className="flex items-center text-sm text-gray-600 mt-1">
                                            <Clock className="h-4 w-4 mr-1" />
                                            <span>{appointment.startTime} - {appointment.endTime}</span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="p-1 text-gray-500 hover:text-gray-700">
                                            <Edit className="h-4 w-4" />
                                        </button>
                                        <button className="p-1 text-gray-500 hover:text-red-600">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="flex items-center text-sm mt-2">
                                            <User className="h-4 w-4 mr-2 text-gray-500" />
                                            <span className="text-gray-800">{appointment.client}</span>
                                        </div>
                                        <div className="flex items-center text-sm mt-2">
                                            <Phone className="h-4 w-4 mr-2 text-gray-500" />
                                            <span className="text-gray-800">{appointment.phone}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-start text-sm mt-2">
                                            <MapPin className="h-4 w-4 mr-2 text-gray-500 mt-0.5" />
                                            <div>
                                                <span className="text-gray-800">{appointment.property}</span>
                                                <span className="block text-xs text-gray-600">{appointment.address}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {appointment.notes && (
                                    <div className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                                        <p>{appointment.notes}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Add more views for week and day as needed */}
        </div>
    );
};

export default Calendar;