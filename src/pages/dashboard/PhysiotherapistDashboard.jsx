import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiCalendar, FiUsers, FiDollarSign, FiClock, FiMapPin } = FiIcons;

const PhysiotherapistDashboard = () => {
  const [stats] = useState({
    upcomingBookings: 5,
    totalClients: 32,
    monthlyEarnings: 3200,
    hoursBooked: 24
  });

  const [upcomingBookings] = useState([
    {
      id: 1,
      client: 'John Smith',
      space: 'FitZone - Treatment Room A',
      date: '2024-01-15',
      time: '10:00 AM - 11:00 AM',
      type: 'Initial Assessment',
      location: '123 Main St, Downtown'
    },
    {
      id: 2,
      client: 'Sarah Johnson',
      space: 'PowerGym - Open Area 1',
      date: '2024-01-15',
      time: '2:00 PM - 3:00 PM',
      type: 'Rehabilitation Session',
      location: '456 Oak Ave, Midtown'
    },
    {
      id: 3,
      client: 'Mike Chen',
      space: 'EliteHealth - Treatment Room B',
      date: '2024-01-16',
      time: '9:00 AM - 10:00 AM',
      type: 'Follow-up Session',
      location: '789 Pine St, Uptown'
    }
  ]);

  const [recentSpaces] = useState([
    {
      id: 1,
      name: 'FitZone - Treatment Room A',
      location: '123 Main St, Downtown',
      rate: 75,
      rating: 4.8,
      amenities: ['Massage Table', 'WiFi', 'Parking']
    },
    {
      id: 2,
      name: 'PowerGym - Open Area 1',
      location: '456 Oak Ave, Midtown',
      rate: 60,
      rating: 4.6,
      amenities: ['Exercise Equipment', 'WiFi', 'Shower']
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Physiotherapist Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your bookings and grow your practice</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <Link
              to="/spaces"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
            >
              <SafeIcon icon={FiSearch} className="w-5 h-5" />
              <span>Find Spaces</span>
            </Link>
            <button className="bg-white text-primary-600 border border-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors flex items-center space-x-2">
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>View Calendar</span>
            </button>
            <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <SafeIcon icon={FiUsers} className="w-5 h-5" />
              <span>Manage Clients</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{stats.upcomingBookings}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiCalendar} className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clients</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalClients}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Monthly Earnings</p>
                <p className="text-2xl font-bold text-gray-900">${stats.monthlyEarnings}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hours Booked</p>
                <p className="text-2xl font-bold text-gray-900">{stats.hoursBooked}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiClock} className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Bookings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Bookings</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{booking.client}</p>
                        <p className="text-sm text-gray-600">{booking.type}</p>
                      </div>
                      <span className="text-sm text-primary-600 font-medium">
                        {booking.date}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                      <span>{booking.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                      <span>{booking.space}</span>
                    </div>
                    <p className="text-sm text-gray-500">{booking.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recently Booked Spaces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recently Booked Spaces</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentSpaces.map((space) => (
                  <div key={space.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{space.name}</p>
                        <p className="text-sm text-gray-600">{space.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">${space.rate}/hour</p>
                        <div className="flex items-center text-sm text-gray-600">
                          <span>★ {space.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {space.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhysiotherapistDashboard;