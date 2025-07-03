import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiCalendar, FiUser, FiClock, FiMapPin, FiStar } = FiIcons;

const ClientDashboard = () => {
  const [stats] = useState({
    upcomingSessions: 2,
    totalSessions: 15,
    favoritePhysios: 3,
    memberDiscount: 15
  });

  const [upcomingSessions] = useState([
    {
      id: 1,
      physio: 'Dr. Sarah Johnson',
      type: 'Sports Rehabilitation',
      date: '2024-01-15',
      time: '10:00 AM - 11:00 AM',
      location: 'FitZone - Treatment Room A',
      address: '123 Main St, Downtown',
      discount: 15
    },
    {
      id: 2,
      physio: 'Dr. Mike Chen',
      type: 'Injury Recovery',
      date: '2024-01-18',
      time: '2:00 PM - 3:00 PM',
      location: 'PowerGym - Open Area 1',
      address: '456 Oak Ave, Midtown',
      discount: 0
    }
  ]);

  const [sessionHistory] = useState([
    {
      id: 1,
      physio: 'Dr. Sarah Johnson',
      type: 'Initial Assessment',
      date: '2024-01-08',
      rating: 5,
      notes: 'Excellent assessment, very thorough'
    },
    {
      id: 2,
      physio: 'Dr. Emma Wilson',
      type: 'Rehabilitation Session',
      date: '2024-01-05',
      rating: 4,
      notes: 'Good progress, helpful exercises'
    },
    {
      id: 3,
      physio: 'Dr. Mike Chen',
      type: 'Follow-up Session',
      date: '2024-01-03',
      rating: 5,
      notes: 'Great improvement, very satisfied'
    }
  ]);

  const [favoritePhysios] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Sports Rehabilitation',
      rating: 4.9,
      sessions: 8,
      location: 'Downtown Area'
    },
    {
      id: 2,
      name: 'Dr. Mike Chen',
      specialty: 'Injury Recovery',
      rating: 4.8,
      sessions: 5,
      location: 'Midtown Area'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Client Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage your physiotherapy sessions and health journey</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <Link
              to="/spaces"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
            >
              <SafeIcon icon={FiSearch} className="w-5 h-5" />
              <span>Find Physiotherapists</span>
            </Link>
            <button className="bg-white text-primary-600 border border-primary-600 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors flex items-center space-x-2">
              <SafeIcon icon={FiCalendar} className="w-5 h-5" />
              <span>View Sessions</span>
            </button>
            <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <SafeIcon icon={FiUser} className="w-5 h-5" />
              <span>Update Profile</span>
            </button>
          </div>
        </div>

        {/* Member Discount Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 rounded-lg mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Gym Member Discount Active!</h3>
              <p className="text-primary-100">Save {stats.memberDiscount}% on all physiotherapy sessions</p>
            </div>
            <div className="text-3xl font-bold">
              {stats.memberDiscount}%
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{stats.upcomingSessions}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiCalendar} className="w-6 h-6 text-blue-600" />
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
                <p className="text-sm font-medium text-gray-600">Total Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalSessions}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiUser} className="w-6 h-6 text-green-600" />
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
                <p className="text-sm font-medium text-gray-600">Favorite Physios</p>
                <p className="text-2xl font-bold text-gray-900">{stats.favoritePhysios}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiStar} className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Member Discount</p>
                <p className="text-2xl font-bold text-gray-900">{stats.memberDiscount}%</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiStar} className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Sessions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Sessions</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{session.physio}</p>
                        <p className="text-sm text-gray-600">{session.type}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-primary-600 font-medium">
                          {session.date}
                        </span>
                        {session.discount > 0 && (
                          <div className="text-xs text-green-600 font-medium">
                            {session.discount}% discount
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                      <span>{session.location}</span>
                    </div>
                    <p className="text-sm text-gray-500">{session.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Session History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Sessions</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {sessionHistory.map((session) => (
                  <div key={session.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{session.physio}</p>
                        <p className="text-sm text-gray-600">{session.type}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-600">{session.date}</span>
                        <div className="flex items-center text-sm text-yellow-600">
                          {[...Array(5)].map((_, i) => (
                            <SafeIcon
                              key={i}
                              icon={FiStar}
                              className={`w-4 h-4 ${i < session.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 italic">"{session.notes}"</p>
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

export default ClientDashboard;