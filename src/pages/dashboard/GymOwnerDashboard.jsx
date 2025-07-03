import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiDollarSign, FiCalendar, FiMapPin, FiTrendingUp, FiUsers } = FiIcons;

const GymOwnerDashboard = () => {
  const [stats] = useState({
    totalEarnings: 4250,
    activeListings: 3,
    totalBookings: 28,
    avgRating: 4.8
  });

  const [recentBookings] = useState([
    {
      id: 1,
      physio: 'Dr. Sarah Johnson',
      space: 'Treatment Room A',
      date: '2024-01-15',
      time: '10:00 AM - 12:00 PM',
      amount: 150,
      status: 'confirmed'
    },
    {
      id: 2,
      physio: 'Dr. Mike Chen',
      space: 'Open Area 1',
      date: '2024-01-16',
      time: '2:00 PM - 4:00 PM',
      amount: 120,
      status: 'pending'
    },
    {
      id: 3,
      physio: 'Dr. Emma Wilson',
      space: 'Treatment Room B',
      date: '2024-01-17',
      time: '9:00 AM - 11:00 AM',
      amount: 140,
      status: 'completed'
    }
  ]);

  const [spaces] = useState([
    {
      id: 1,
      name: 'Treatment Room A',
      type: 'Private Room',
      rate: 75,
      bookings: 12,
      status: 'active'
    },
    {
      id: 2,
      name: 'Open Area 1',
      type: 'Open Space',
      rate: 60,
      bookings: 8,
      status: 'active'
    },
    {
      id: 3,
      name: 'Treatment Room B',
      type: 'Private Room',
      rate: 70,
      bookings: 8,
      status: 'inactive'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Gym Owner Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your spaces and track your earnings</p>
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
                <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-900">${stats.totalEarnings}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-600" />
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
                <p className="text-sm font-medium text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeListings}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiMapPin} className="w-6 h-6 text-blue-600" />
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
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalBookings}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiCalendar} className="w-6 h-6 text-purple-600" />
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
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-2xl font-bold text-gray-900">{stats.avgRating}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Bookings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{booking.physio}</p>
                      <p className="text-sm text-gray-600">{booking.space}</p>
                      <p className="text-sm text-gray-600">{booking.date} • {booking.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${booking.amount}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Your Spaces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Your Spaces</h2>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
                <SafeIcon icon={FiPlus} className="w-4 h-4" />
                <span>Add Space</span>
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {spaces.map((space) => (
                  <div key={space.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{space.name}</p>
                      <p className="text-sm text-gray-600">{space.type}</p>
                      <p className="text-sm text-gray-600">{space.bookings} bookings this month</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">${space.rate}/hour</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        space.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {space.status}
                      </span>
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

export default GymOwnerDashboard;