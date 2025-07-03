import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiMapPin, FiFilter, FiStar, FiWifi, FiCar, FiCoffee } = FiIcons;

const SearchSpacesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    amenities: [],
    date: ''
  });

  const [spaces] = useState([
    {
      id: 1,
      name: 'FitZone Treatment Room A',
      gym: 'FitZone Gym',
      location: '123 Main St, Downtown',
      price: 75,
      rating: 4.8,
      reviews: 24,
      amenities: ['Massage Table', 'WiFi', 'Parking', 'Air Conditioning'],
      images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'],
      available: true,
      distance: '0.5 miles'
    },
    {
      id: 2,
      name: 'PowerGym Open Area 1',
      gym: 'PowerGym',
      location: '456 Oak Ave, Midtown',
      price: 60,
      rating: 4.6,
      reviews: 18,
      amenities: ['Exercise Equipment', 'WiFi', 'Shower', 'Towels'],
      images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400'],
      available: true,
      distance: '1.2 miles'
    },
    {
      id: 3,
      name: 'EliteHealth Treatment Room B',
      gym: 'EliteHealth Center',
      location: '789 Pine St, Uptown',
      price: 85,
      rating: 4.9,
      reviews: 31,
      amenities: ['Private Room', 'Massage Table', 'WiFi', 'Parking', 'Reception'],
      images: ['https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400'],
      available: true,
      distance: '2.1 miles'
    },
    {
      id: 4,
      name: 'FlexFit Therapy Space',
      gym: 'FlexFit Studio',
      location: '321 Cedar Rd, Southside',
      price: 55,
      rating: 4.4,
      reviews: 12,
      amenities: ['Open Space', 'Yoga Mats', 'WiFi', 'Sound System'],
      images: ['https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400'],
      available: false,
      distance: '3.0 miles'
    },
    {
      id: 5,
      name: 'ProFit Recovery Room',
      gym: 'ProFit Gym',
      location: '654 Maple Ave, Westside',
      price: 70,
      rating: 4.7,
      reviews: 22,
      amenities: ['Recovery Equipment', 'Hot Tub', 'WiFi', 'Parking'],
      images: ['https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400'],
      available: true,
      distance: '1.8 miles'
    },
    {
      id: 6,
      name: 'ZenGym Wellness Suite',
      gym: 'ZenGym',
      location: '987 Birch St, Eastside',
      price: 90,
      rating: 4.9,
      reviews: 35,
      amenities: ['Private Suite', 'Massage Table', 'Aromatherapy', 'WiFi', 'Parking'],
      images: ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400'],
      available: true,
      distance: '2.5 miles'
    }
  ]);

  const filteredSpaces = spaces.filter(space => {
    const matchesSearch = space.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         space.gym.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         space.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = !filters.location || space.location.toLowerCase().includes(filters.location.toLowerCase());
    
    const matchesPrice = !filters.priceRange || 
                        (filters.priceRange === 'under-60' && space.price < 60) ||
                        (filters.priceRange === '60-80' && space.price >= 60 && space.price <= 80) ||
                        (filters.priceRange === 'over-80' && space.price > 80);
    
    return matchesSearch && matchesLocation && matchesPrice;
  });

  const getAmenityIcon = (amenity) => {
    const amenityIcons = {
      'WiFi': FiWifi,
      'Parking': FiCar,
      'Reception': FiCoffee,
      'default': FiStar
    };
    return amenityIcons[amenity] || amenityIcons.default;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Perfect Spaces</h1>
          <p className="text-gray-600 mt-2">Discover treatment rooms and spaces for your physiotherapy practice</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search spaces..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <SafeIcon icon={FiMapPin} className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">All Prices</option>
              <option value="under-60">Under $60/hour</option>
              <option value="60-80">$60 - $80/hour</option>
              <option value="over-80">Over $80/hour</option>
            </select>
            
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
              <SafeIcon icon={FiFilter} className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {filteredSpaces.length} spaces found
          </p>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <option>Sort by Distance</option>
            <option>Sort by Price (Low to High)</option>
            <option>Sort by Price (High to Low)</option>
            <option>Sort by Rating</option>
          </select>
        </div>

        {/* Space Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={space.images[0]}
                  alt={space.name}
                  className="w-full h-48 object-cover"
                />
                {!space.available && (
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Not Available
                    </span>
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                  ${space.price}/hour
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{space.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{space.gym}</p>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                  <span>{space.location}</span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <SafeIcon
                          key={i}
                          icon={FiStar}
                          className={`w-4 h-4 ${i < Math.floor(space.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {space.rating} ({space.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{space.distance}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {space.amenities.slice(0, 3).map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full text-xs">
                      <SafeIcon icon={getAmenityIcon(amenity)} className="w-3 h-3" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                  {space.amenities.length > 3 && (
                    <span className="text-xs text-gray-500">+{space.amenities.length - 3} more</span>
                  )}
                </div>
                
                <Link
                  to={`/spaces/${space.id}`}
                  className={`w-full py-2 px-4 rounded-lg text-center font-medium transition-colors ${
                    space.available
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {space.available ? 'View Details' : 'Unavailable'}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSpaces.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No spaces found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSpacesPage;