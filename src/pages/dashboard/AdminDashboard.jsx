import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiDollarSign, FiMapPin, FiTrendingUp, FiAlertCircle, FiCheck } = FiIcons;

const AdminDashboard = () => {
  const [stats] = useState({
    totalUsers: 1247,
    totalRevenue: 45600,
    activeListings: 156,
    pendingApprovals: 8
  });

  const [recentActivity] = useState([
    {
      id: 1,
      type: 'new_user',
      message: 'New physiotherapist registered: Dr. Sarah Johnson',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      type: 'new_listing',
      message: 'New space listed: FitZone Treatment Room C',
      time: '4 hours ago',
      status: 'approved'
    },
    {
      id: 3,
      type: 'booking',
      message: 'Booking completed: $150 commission earned',
      time: '6 hours ago',
      status: 'completed'
    },
    {
      id: 4,
      type: 'dispute',
      message: 'Dispute raised: Booking #1234 needs review',
      time: '1 day ago',
      status: 'pending'
    }
  ]);

  const [pendingApprovals] = useState([
    {
      id: 1,
      type: 'user',
      name: 'Dr. Mike Chen',
      email: 'mike.chen@email.com',
      userType: 'physiotherapist',
      submittedAt: '2024-01-14'
    },
    {
      id: 2,
      type: 'listing',
      name: 'PowerGym - Treatment Room D',
      owner: 'FitZone Gym',
      location: 'Downtown',
      submittedAt: '2024-01-14'
    },
    {
      id: 3,
      type: 'user',
      name: 'Elite Fitness Center',
      email: 'admin@elitefitness.com',
      userType: 'gym_owner',
      submittedAt: '2024-01-13'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage platform operations and monitor performance</p>
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
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-blue-600" />
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
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-600" />
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
                <p className="text-sm font-medium text-gray-600">Active Listings</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeListings}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiMapPin} className="w-6 h-6 text-purple-600" />
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
                <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingApprovals}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiAlertCircle} className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'completed' ? 'bg-green-500' :
                      activity.status === 'approved' ? 'bg-blue-500' :
                      activity.status === 'pending' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                      activity.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                      activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pending Approvals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Pending Approvals</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          {item.type === 'user' ? item.userType : 'Space Listing'}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.type === 'user' ? item.email : item.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">{item.submittedAt}</p>
                        <div className="flex space-x-2 mt-2">
                          <button className="p-1 text-green-600 hover:bg-green-100 rounded">
                            <SafeIcon icon={FiCheck} className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-red-600 hover:bg-red-100 rounded">
                            <SafeIcon icon={FiAlertCircle} className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
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

export default AdminDashboard;