import React, { useState, useEffect } from 'react';
import { Search, Filter, Map, Grid, List, Plus, Star, ChevronDown, Edit, Trash2, ExternalLink } from 'lucide-react';

const PropertiesPage = () => {
    // State for properties data
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [filterOpen, setFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({
        status: 'all',
        type: 'all',
        priceRange: [0, 2000000],
        bedrooms: 'any',
        bathrooms: 'any',
    });

    // Mock data for demonstration
    useEffect(() => {
        const mockProperties = [
            {
                id: 1,
                address: '123 Main Street, New York, NY 10001',
                price: 750000,
                beds: 3,
                baths: 2,
                sqft: 1500,
                type: 'single-family',
                status: 'active',
                image: 'https://cdn.commercialcafe.com/images/F50C41FE-3AE7-4653-94F9-7FE4822FA5F3/IMG_2321.jpg?width=450',
                favorite: false,
                dateAdded: '2025-03-28',
            },
            {
                id: 2,
                address: '456 Park Avenue, New York, NY 10022',
                price: 1250000,
                beds: 4,
                baths: 3,
                sqft: 2200,
                type: 'condo',
                status: 'pending',
                image: 'https://cdn.commercialcafe.com/images/F50C41FE-3AE7-4653-94F9-7FE4822FA5F3/IMG_2321.jpg?width=450',
                favorite: true,
                dateAdded: '2025-03-25',
            },
            {
                id: 3,
                address: '789 Broadway, New York, NY 10003',
                price: 950000,
                beds: 2,
                baths: 2,
                sqft: 1100,
                type: 'co-op',
                status: 'active',
                image: 'https://cdn.commercialcafe.com/images/F50C41FE-3AE7-4653-94F9-7FE4822FA5F3/IMG_2321.jpg?width=450',
                favorite: false,
                dateAdded: '2025-04-01',
            },
            {
                id: 4,
                address: '321 Fifth Avenue, New York, NY 10016',
                price: 1750000,
                beds: 5,
                baths: 4,
                sqft: 3000,
                type: 'single-family',
                status: 'sold',
                image: 'https://cdn.commercialcafe.com/images/F50C41FE-3AE7-4653-94F9-7FE4822FA5F3/IMG_2321.jpg?width=450',
                favorite: false,
                dateAdded: '2025-02-15',
            },
            {
                id: 5,
                address: '654 West End Avenue, New York, NY 10023',
                price: 875000,
                beds: 3,
                baths: 2,
                sqft: 1650,
                type: 'condo',
                status: 'active',
                image: 'https://cdn.commercialcafe.com/images/F50C41FE-3AE7-4653-94F9-7FE4822FA5F3/IMG_2321.jpg?width=450',
                favorite: true,
                dateAdded: '2025-03-20',
            },
            {
                id: 6,
                address: '987 Lexington Avenue, New York, NY 10021',
                price: 1450000,
                beds: 4,
                baths: 3,
                sqft: 2400,
                type: 'townhouse',
                status: 'active',
                image: 'https://cdn.commercialcafe.com/images/F50C41FE-3AE7-4653-94F9-7FE4822FA5F3/IMG_2321.jpg?width=450',
                favorite: false,
                dateAdded: '2025-04-05',
            },
        ];

        setProperties(mockProperties);
        setFilteredProperties(mockProperties);
    }, []);

    // Filter properties based on search and filters
    useEffect(() => {
        let filtered = [...properties];

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(property =>
                property.address.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply status filter
        if (selectedFilters.status !== 'all') {
            filtered = filtered.filter(property => property.status === selectedFilters.status);
        }

        // Apply type filter
        if (selectedFilters.type !== 'all') {
            filtered = filtered.filter(property => property.type === selectedFilters.type);
        }

        // Apply price range filter
        filtered = filtered.filter(property =>
            property.price >= selectedFilters.priceRange[0] && property.price <= selectedFilters.priceRange[1]
        );

        // Apply bedrooms filter
        if (selectedFilters.bedrooms !== 'any') {
            const bedroomsNum = parseInt(selectedFilters.bedrooms);
            if (selectedFilters.bedrooms === '5+') {
                filtered = filtered.filter(property => property.beds >= 5);
            } else {
                filtered = filtered.filter(property => property.beds === bedroomsNum);
            }
        }

        // Apply bathrooms filter
        if (selectedFilters.bathrooms !== 'any') {
            const bathroomsNum = parseInt(selectedFilters.bathrooms);
            if (selectedFilters.bathrooms === '4+') {
                filtered = filtered.filter(property => property.baths >= 4);
            } else {
                filtered = filtered.filter(property => property.baths === bathroomsNum);
            }
        }

        setFilteredProperties(filtered);
    }, [searchQuery, selectedFilters, properties]);

    // Format price to USD currency
    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(price);
    };

    // Toggle favorite status
    const toggleFavorite = (id) => {
        setProperties(properties.map(property =>
            property.id === id ? { ...property, favorite: !property.favorite } : property
        ));
    };

    // Status badge style
    const getStatusBadgeStyle = (status) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'sold':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-blue-100 text-blue-800';
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="bg-white p-6 border-b">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
                        <Plus size={16} className="mr-2" />
                        Add Property
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    {/* Search bar */}
                    <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search size={18} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search properties by address or ZIP code"
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Filter button */}
                    <div className="relative">
                        <button
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                            onClick={() => setFilterOpen(!filterOpen)}
                        >
                            <Filter size={18} className="mr-2 text-gray-500" />
                            Filters
                            <ChevronDown size={16} className="ml-2 text-gray-500" />
                        </button>

                        {/* Filter dropdown */}
                        {filterOpen && (
                            <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-10 p-4">
                                <h4 className="font-medium mb-3 text-gray-700">Filter Properties</h4>

                                {/* Status filter */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                    <select
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={selectedFilters.status}
                                        onChange={(e) => setSelectedFilters({ ...selectedFilters, status: e.target.value })}
                                    >
                                        <option value="all">All</option>
                                        <option value="active">Active</option>
                                        <option value="pending">Pending</option>
                                        <option value="sold">Sold</option>
                                    </select>
                                </div>

                                {/* Type filter */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                                    <select
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={selectedFilters.type}
                                        onChange={(e) => setSelectedFilters({ ...selectedFilters, type: e.target.value })}
                                    >
                                        <option value="all">All</option>
                                        <option value="single-family">Single Family</option>
                                        <option value="condo">Condo</option>
                                        <option value="townhouse">Townhouse</option>
                                        <option value="co-op">Co-op</option>
                                    </select>
                                </div>

                                {/* Price Range filter */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Price Range: {formatPrice(selectedFilters.priceRange[0])} - {formatPrice(selectedFilters.priceRange[1])}
                                    </label>
                                    <div className="flex gap-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="2000000"
                                            step="50000"
                                            value={selectedFilters.priceRange[0]}
                                            onChange={(e) => setSelectedFilters({
                                                ...selectedFilters,
                                                priceRange: [parseInt(e.target.value), selectedFilters.priceRange[1]]
                                            })}
                                            className="w-full"
                                        />
                                        <input
                                            type="range"
                                            min="0"
                                            max="2000000"
                                            step="50000"
                                            value={selectedFilters.priceRange[1]}
                                            onChange={(e) => setSelectedFilters({
                                                ...selectedFilters,
                                                priceRange: [selectedFilters.priceRange[0], parseInt(e.target.value)]
                                            })}
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                {/* Bedrooms filter */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                                    <select
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={selectedFilters.bedrooms}
                                        onChange={(e) => setSelectedFilters({ ...selectedFilters, bedrooms: e.target.value })}
                                    >
                                        <option value="any">Any</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5+">5+</option>
                                    </select>
                                </div>

                                {/* Bathrooms filter */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                                    <select
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={selectedFilters.bathrooms}
                                        onChange={(e) => setSelectedFilters({ ...selectedFilters, bathrooms: e.target.value })}
                                    >
                                        <option value="any">Any</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4+">4+</option>
                                    </select>
                                </div>

                                {/* Filter actions */}
                                <div className="flex justify-between">
                                    <button
                                        className="text-gray-600 hover:text-gray-900"
                                        onClick={() => setSelectedFilters({
                                            status: 'all',
                                            type: 'all',
                                            priceRange: [0, 2000000],
                                            bedrooms: 'any',
                                            bathrooms: 'any',
                                        })}
                                    >
                                        Reset
                                    </button>
                                    <button
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
                                        onClick={() => setFilterOpen(false)}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* View toggle */}
                    <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                        <button
                            className={`flex items-center px-3 py-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-500'}`}
                            onClick={() => setViewMode('grid')}
                        >
                            <Grid size={18} className="mr-1" />
                            Grid
                        </button>
                        <button
                            className={`flex items-center px-3 py-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-500'}`}
                            onClick={() => setViewMode('list')}
                        >
                            <List size={18} className="mr-1" />
                            List
                        </button>
                        <button
                            className={`flex items-center px-3 py-2 ${viewMode === 'map' ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-500'}`}
                            onClick={() => setViewMode('map')}
                        >
                            <Map size={18} className="mr-1" />
                            Map
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{filteredProperties.length} properties found</span>
                    <div className="flex items-center">
                        <span className="mr-2">Sort by:</span>
                        <select className="border-none bg-transparent focus:outline-none text-gray-700">
                            <option>Newest</option>
                            <option>Price (Low to High)</option>
                            <option>Price (High to Low)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="flex-grow p-6 bg-gray-50 overflow-auto">
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProperties.map((property) => (
                            <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                <div className="relative">
                                    <img src={property.image} alt={property.address} className="w-full h-48 object-cover" />
                                    <button
                                        className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-md"
                                        onClick={() => toggleFavorite(property.id)}
                                    >
                                        <Star
                                            size={18}
                                            className={property.favorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
                                        />
                                    </button>
                                    <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeStyle(property.status)}`}>
                                        {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium text-gray-900 truncate">{property.address}</h3>
                                    <p className="text-lg font-semibold text-blue-600 mt-1">{formatPrice(property.price)}</p>
                                    <div className="flex gap-3 mt-2 text-gray-600 text-sm">
                                        <span>{property.beds} beds</span>
                                        <span>•</span>
                                        <span>{property.baths} baths</span>
                                        <span>•</span>
                                        <span>{property.sqft.toLocaleString()} sqft</span>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                                        <div className="text-xs text-gray-500">Added {property.dateAdded}</div>
                                        <div className="flex gap-2">
                                            <button className="p-1 text-gray-400 hover:text-blue-600">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-1 text-gray-400 hover:text-red-600">
                                                <Trash2 size={16} />
                                            </button>
                                            <button className="p-1 text-gray-400 hover:text-purple-600">
                                                <ExternalLink size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : viewMode === 'list' ? (
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredProperties.map((property) => (
                                    <tr key={property.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 rounded overflow-hidden">
                                                    <img src={property.image} alt="" className="h-10 w-10 object-cover" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900 max-w-xs truncate">{property.address}</div>
                                                    <div className="text-sm text-gray-500">{property.type.replace('-', ' ')}</div>
                                                </div>
                                                <button
                                                    className="ml-2"
                                                    onClick={() => toggleFavorite(property.id)}
                                                >
                                                    <Star
                                                        size={16}
                                                        className={property.favorite ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
                                                    />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeStyle(property.status)}`}>
                                                {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                            {formatPrice(property.price)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {property.beds} beds • {property.baths} baths • {property.sqft.toLocaleString()} sqft
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {property.dateAdded}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-1 text-gray-400 hover:text-blue-600">
                                                    <Edit size={16} />
                                                </button>
                                                <button className="p-1 text-gray-400 hover:text-red-600">
                                                    <Trash2 size={16} />
                                                </button>
                                                <button className="p-1 text-gray-400 hover:text-purple-600">
                                                    <ExternalLink size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg border border-gray-200 p-6 h-full flex items-center justify-center">
                        <div className="text-center">
                            <Map size={48} className="mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium text-gray-700">Map View</h3>
                            <p className="text-gray-500 mt-2">This feature would integrate with a maps API to show property locations.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertiesPage;