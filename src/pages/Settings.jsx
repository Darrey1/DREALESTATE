import React, { useState } from 'react';
import { Tab, TabGroup, TabPanels, TabPanel, TabList } from '@headlessui/react';
import { FiUser, FiLock, FiSlack, FiCalendar, FiMail, FiSave } from 'react-icons/fi';
import IMG from "../assets/my pic.jpeg"
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Settings = () => {
    const [profile, setProfile] = useState({
        name: 'Dare Timileyin',
        email: 'daretimileyin1@gmail.com',
        phone: '(+234) 9074842728',
        title: 'Real Estate Agent',
        bio: 'Experienced real estate agent with 5+ years in the industry.',
        avatar: IMG,
    });

    const [password, setPassword] = useState({
        current: '',
        new: '',
        confirm: '',
    });

    const [integrations, setIntegrations] = useState({
        googleCalendar: true,
        slack: false,
        outlook: true,
        gmail: true,
    });

    const [notifications, setNotifications] = useState({
        email: {
            newLeads: true,
            appointments: true,
            followUps: false,
        },
        push: {
            newLeads: true,
            appointments: true,
            followUps: true,
        },
    });

    const [isSaving, setIsSaving] = useState(false);

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPassword((prev) => ({ ...prev, [name]: value }));
    };

    const handleIntegrationToggle = (name) => {
        setIntegrations((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    const handleNotificationToggle = (type, name) => {
        setNotifications((prev) => ({
            ...prev,
            [type]: { ...prev[type], [name]: !prev[type][name] },
        }));
    };

    const saveChanges = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSaving(false);
        // Show success notification (could use a toast library here)
        alert('Settings saved successfully!');
    };

    const categories = [
        {
            name: 'Profile',
            icon: <FiUser className="w-5 h-5" />,
            content: (
                <form className="space-y-6" onSubmit={saveChanges}>
                    <div className="flex items-center space-x-6">
                        <div className="flex-shrink-0">
                            <img className="h-16 w-16 rounded-full object-cover" src={profile.avatar} alt="User avatar" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Photo</label>
                            <div className="mt-1 flex items-center">
                                <button
                                    type="button"
                                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={profile.name}
                                    onChange={handleProfileChange}
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Job Title
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={profile.title}
                                    onChange={handleProfileChange}
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={profile.email}
                                    onChange={handleProfileChange}
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    value={profile.phone}
                                    onChange={handleProfileChange}
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                                Bio
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="bio"
                                    name="bio"
                                    rows={3}
                                    value={profile.bio}
                                    onChange={handleProfileChange}
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                />
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                                Write a few sentences about yourself.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            disabled={isSaving}
                        >
                            {isSaving ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <FiSave className="mr-2 -ml-1 h-4 w-4" />
                                    Save Changes
                                </>
                            )}
                        </button>
                    </div>
                </form>
            ),
        },
        {
            name: 'Password',
            icon: <FiLock className="w-5 h-5" />,
            content: (
                <form className="space-y-6" onSubmit={saveChanges}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                                Current Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="current-password"
                                    name="current"
                                    type="password"
                                    value={password.current}
                                    onChange={handlePasswordChange}
                                    required
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                                New Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="new-password"
                                    name="new"
                                    type="password"
                                    value={password.new}
                                    onChange={handlePasswordChange}
                                    required
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                                Confirm New Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="confirm-password"
                                    name="confirm"
                                    type="password"
                                    value={password.confirm}
                                    onChange={handlePasswordChange}
                                    required
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-md">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-blue-800">Password requirements</h3>
                                <div className="mt-2 text-sm text-blue-700">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Minimum 8 characters</li>
                                        <li>At least one uppercase letter</li>
                                        <li>At least one number</li>
                                        <li>At least one special character</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            disabled={isSaving}
                        >
                            {isSaving ? 'Updating...' : 'Update Password'}
                        </button>
                    </div>
                </form>
            ),
        },
        {
            name: 'Integrations',
            icon: <FiSlack className="w-5 h-5" />,
            content: (
                <div className="space-y-6">
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            <li>
                                <div className="px-4 py-5 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-8 w-8" src="https://www.gstatic.com/images/branding/product/2x/calendar_48dp.png" alt="Google Calendar" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-sm font-medium text-gray-900">Google Calendar</h3>
                                                <p className="text-sm text-gray-500">Sync appointments and schedule</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => handleIntegrationToggle('googleCalendar')}
                                                type="button"
                                                className={classNames(
                                                    integrations.googleCalendar ? 'bg-blue-600' : 'bg-gray-200',
                                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                                )}
                                            >
                                                <span className="sr-only">Toggle Google Calendar</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        integrations.googleCalendar ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                    )}
                                                />
                                            </button>
                                            {integrations.googleCalendar ? (
                                                <span className="ml-3 text-sm text-green-500">Connected</span>
                                            ) : (
                                                <span className="ml-3 text-sm text-gray-500">Disconnected</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="px-4 py-5 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-8 w-8" src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="Slack" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-sm font-medium text-gray-900">Slack</h3>
                                                <p className="text-sm text-gray-500">Receive notifications and updates</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => handleIntegrationToggle('slack')}
                                                type="button"
                                                className={classNames(
                                                    integrations.slack ? 'bg-blue-600' : 'bg-gray-200',
                                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                                )}
                                            >
                                                <span className="sr-only">Toggle Slack</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        integrations.slack ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                    )}
                                                />
                                            </button>
                                            {integrations.slack ? (
                                                <span className="ml-3 text-sm text-green-500">Connected</span>
                                            ) : (
                                                <span className="ml-3 text-sm text-gray-500">Disconnected</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="px-4 py-5 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-8 w-8" src="https://img.icons8.com/color/48/000000/microsoft-outlook-2019--v2.png" alt="Outlook" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-sm font-medium text-gray-900">Microsoft Outlook</h3>
                                                <p className="text-sm text-gray-500">Sync emails and calendar</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => handleIntegrationToggle('outlook')}
                                                type="button"
                                                className={classNames(
                                                    integrations.outlook ? 'bg-blue-600' : 'bg-gray-200',
                                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                                )}
                                            >
                                                <span className="sr-only">Toggle Outlook</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        integrations.outlook ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                    )}
                                                />
                                            </button>
                                            {integrations.outlook ? (
                                                <span className="ml-3 text-sm text-green-500">Connected</span>
                                            ) : (
                                                <span className="ml-3 text-sm text-gray-500">Disconnected</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="px-4 py-5 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="h-8 w-8" src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Gmail" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-sm font-medium text-gray-900">Gmail</h3>
                                                <p className="text-sm text-gray-500">Email automation and tracking</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => handleIntegrationToggle('gmail')}
                                                type="button"
                                                className={classNames(
                                                    integrations.gmail ? 'bg-blue-600' : 'bg-gray-200',
                                                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                                                )}
                                            >
                                                <span className="sr-only">Toggle Gmail</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        integrations.gmail ? 'translate-x-5' : 'translate-x-0',
                                                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                    )}
                                                />
                                            </button>
                                            {integrations.gmail ? (
                                                <span className="ml-3 text-sm text-green-500">Connected</span>
                                            ) : (
                                                <span className="ml-3 text-sm text-gray-500">Disconnected</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={saveChanges}
                            type="button"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            disabled={isSaving}
                        >
                            {isSaving ? 'Saving...' : 'Save Integrations'}
                        </button>
                    </div>
                </div>
            ),
        },
        {
            name: 'Notifications',
            icon: <FiMail className="w-5 h-5" />,
            content: (
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Email Notifications</h3>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="email-new-leads"
                                        name="email-notifications"
                                        type="checkbox"
                                        checked={notifications.email.newLeads}
                                        onChange={() => handleNotificationToggle('email', 'newLeads')}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="email-new-leads" className="font-medium text-gray-700">New leads</label>
                                    <p className="text-gray-500">Get notified when new leads are added to the system.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="email-appointments"
                                        name="email-notifications"
                                        type="checkbox"
                                        checked={notifications.email.appointments}
                                        onChange={() => handleNotificationToggle('email', 'appointments')}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="email-appointments" className="font-medium text-gray-700">Appointments</label>
                                    <p className="text-gray-500">Receive email notifications for upcoming appointments.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="email-follow-ups"
                                        name="email-notifications"
                                        type="checkbox"
                                        checked={notifications.email.followUps}
                                        onChange={() => handleNotificationToggle('email', 'followUps')}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="email-follow-ups" className="font-medium text-gray-700">Follow-ups</label>
                                    <p className="text-gray-500">Get reminders for scheduled follow-ups with clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Push Notifications</h3>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="push-new-leads"
                                        name="push-notifications"
                                        type="checkbox"
                                        checked={notifications.push.newLeads}
                                        onChange={() => handleNotificationToggle('push', 'newLeads')}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="push-new-leads" className="font-medium text-gray-700">New leads</label>
                                    <p className="text-gray-500">Receive browser notifications for new leads.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="push-appointments"
                                        name="push-notifications"
                                        type="checkbox"
                                        checked={notifications.push.appointments}
                                        onChange={() => handleNotificationToggle('push', 'appointments')}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="push-appointments" className="font-medium text-gray-700">Appointments</label>
                                    <p className="text-gray-500">Get browser alerts for upcoming appointments.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="push-follow-ups"
                                        name="push-notifications"
                                        type="checkbox"
                                        checked={notifications.push.followUps}
                                        onChange={() => handleNotificationToggle('push', 'followUps')}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="push-follow-ups" className="font-medium text-gray-700">Follow-ups</label>
                                    <p className="text-gray-500">Receive browser notifications for follow-up reminders.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={saveChanges}
                            type="button"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            disabled={isSaving}
                        >
                            {isSaving ? 'Saving...' : 'Save Notification Preferences'}
                        </button>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="border-b border-gray-200 pb-5">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Settings
                    </h2>
                    <p className="mt-2 max-w-4xl text-sm text-gray-500">
                        Manage your account settings and preferences.
                    </p>
                </div>

                <div className="mt-8">
                    <TabGroup>
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">
                                Select a tab
                            </label>
                            <select
                                id="tabs"
                                name="tabs"
                                className="block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                defaultValue={categories[0].name}
                            >
                                {categories.map((category) => (
                                    <option key={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <TabList className="flex space-x-8 border-b border-gray-200">
                                {categories.map((category) => (
                                    <Tab
                                        key={category.name}
                                        className={({ selected }) =>
                                            classNames(
                                                'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm',
                                                selected
                                                    ? 'border-blue-500 text-blue-600'
                                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                            )
                                        }
                                    >
                                        <span className="mr-2">{category.icon}</span>
                                        {category.name}
                                    </Tab>
                                ))}
                            </TabList>
                        </div>
                        <TabPanels className="mt-8">
                            {categories.map((category, idx) => (
                                <TabPanel key={idx} className="p-4 bg-white rounded-lg shadow">
                                    {category.content}
                                </TabPanel>
                            ))}
                        </TabPanels>
                    </TabGroup>
                </div>
            </div>
        </div>
    );
};

export default Settings;