// src/pages/Leads.jsx
import React, { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, CheckCircle, XCircle, AlignLeft, User } from 'lucide-react';

const Leads = () => {
    const [leads, setLeads] = useState([
        {
            id: 1,
            name: 'Sarah Johnson',
            email: 'sarah@example.com',
            phone: '(555) 123-4567',
            status: 'New',
            source: 'Website',
            interest: 'Buying',
            lastContact: '2 days ago',
            score: 85,
            notes: "Looking for a 3-bedroom house in the downtown area. Budget around $500k.",
            assigned: "John Smith"
        },
        {
            id: 2,
            name: 'Michael Chen',
            email: 'mchen@example.com',
            phone: '(555) 234-5678',
            status: 'Contacted',
            source: 'Referral',
            interest: 'Selling',
            lastContact: '5 days ago',
            score: 72,
            notes: "Has a condo to sell in the next 3 months. Looking for market evaluation.",
            assigned: "John Smith"
        },
        {
            id: 3,
            name: 'Jessica Rodriguez',
            email: 'jess@example.com',
            phone: '(555) 345-6789',
            status: 'Qualified',
            source: 'Social Media',
            interest: 'Buying',
            lastContact: '1 day ago',
            score: 91,
            notes: "Pre-approved for $450k mortgage. Interested in suburban properties.",
            assigned: "John Smith"
        },
        {
            id: 4,
            name: 'David Wilson',
            email: 'david@example.com',
            phone: '(555) 456-7890',
            status: 'Appointment',
            source: 'Website',
            interest: 'Buying',
            lastContact: 'Today',
            score: 95,
            notes: "Meeting scheduled for property viewing tomorrow at 2pm.",
            assigned: "John Smith"
        },
        {
            id: 5,
            name: 'Emily Brown',
            email: 'emily@example.com',
            phone: '(555) 567-8901',
            status: 'Closed',
            source: 'Email',
            interest: 'Renting',
            lastContact: '3 days ago',
            score: 78,
            notes: "Signed lease agreement for downtown apartment.",
            assigned: "John Smith"
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLeadId, setSelectedLeadId] = useState(null);
    const [filter, setFilter] = useState('all');

    const filteredLeads = leads.filter(lead => {
        const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.phone.includes(searchTerm);

        if (filter === 'all') return matchesSearch;
        return matchesSearch && lead.status.toLowerCase() === filter.toLowerCase();
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'New': return 'bg-blue-100 text-blue-800';
            case 'Contacted': return 'bg-yellow-100 text-yellow-800';
            case 'Qualified': return 'bg-green-100 text-green-800';
            case 'Appointment': return 'bg-purple-100 text-purple-800';
            case 'Closed': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getScoreColor = (score) => {
        if (score >= 90) return 'text-green-600';
        if (score >= 70) return 'text-blue-600';
        if (score >= 50) return 'text-yellow-600';
        return 'text-red-600';
    };

    const selectedLead = selectedLeadId ? leads.find(lead => lead.id === selectedLeadId) : null;

    return (
        <div className="h-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Lead Management</h2>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
                    <Plus className="h-5 w-5 mr-2" />
                    Add New Lead
                </button>
            </div>

            <div className="flex h-full mb-6">
                <div className="flex-1 mr-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <div className="relative w-64">
                                <input
                                    type="text"
                                    placeholder="Search leads..."
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>

                            <div className="flex items-center">
                                <span className="mr-2 text-sm text-gray-600">Filter:</span>
                                <select
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                >
                                    <option value="all">All Leads</option>
                                    <option value="new">New</option>
                                    <option value="contacted">Contacted</option>
                                    <option value="qualified">Qualified</option>
                                    <option value="appointment">Appointment</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Lead
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Source
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Interest
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Last Contact
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Score
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredLeads.map((lead) => (
                                        <tr
                                            key={lead.id}
                                            className={`hover:bg-gray-50 cursor-pointer ${selectedLeadId === lead.id ? 'bg-blue-50' : ''}`}
                                            onClick={() => setSelectedLeadId(lead.id)}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                        <User className="h-6 w-6 text-gray-500" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                                                        <div className="text-sm text-gray-500">{lead.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                                                    {lead.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {lead.source}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {lead.interest}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {lead.lastContact}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`text-sm font-medium ${getScoreColor(lead.score)}`}>
                                                    {lead.score}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button className="text-gray-400 hover:text-gray-600">
                                                    <MoreHorizontal className="h-5 w-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {selectedLead && (
                    <div className="w-96 bg-white rounded-xl shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-800">Lead Details</h3>
                            <div className="flex space-x-2">
                                <button className="p-2 text-gray-400 hover:text-gray-600">
                                    <AlignLeft className="h-5 w-5" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="flex-shrink-0 h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                                <User className="h-8 w-8 text-gray-500" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-semibold text-gray-800">{selectedLead.name}</h4>
                                <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(selectedLead.status)}`}>
                                    {selectedLead.status}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Contact Information</p>
                                <div className="mt-1 space-y-2">
                                    <p className="text-sm text-gray-800">{selectedLead.email}</p>
                                    <p className="text-sm text-gray-800">{selectedLead.phone}</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Lead Score</p>
                                <div className="mt-1">
                                    <div className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded-full"
                                                style={{ width: `${selectedLead.score}%` }}
                                            ></div>
                                        </div>
                                        <span className={`ml-2 text-sm font-medium ${getScoreColor(selectedLead.score)}`}>
                                            {selectedLead.score}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Details</p>
                                <div className="mt-1 space-y-2">
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Source:</p>
                                        <p className="text-sm text-gray-800">{selectedLead.source}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Interest:</p>
                                        <p className="text-sm text-gray-800">{selectedLead.interest}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Last Contact:</p>
                                        <p className="text-sm text-gray-800">{selectedLead.lastContact}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-sm text-gray-500">Assigned To:</p>
                                        <p className="text-sm text-gray-800">{selectedLead.assigned}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Notes</p>
                                <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-gray-800">{selectedLead.notes}</p>
                                </div>
                            </div>

                            <div className="pt-4 flex space-x-2">
                                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                                    Message
                                </button>
                                <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50">
                                    Schedule
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Leads;