import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiCalendar, FiCreditCard, FiUsers, FiTrendingUp, FiShield } = FiIcons;

const LandingPage = () => {
  const features = [
    {
      icon: FiMapPin,
      title: 'Find Perfect Spaces',
      description: 'Browse available treatment rooms and spaces in gyms near you.'
    },
    {
      icon: FiCalendar,
      title: 'Easy Booking',
      description: 'Book spaces instantly with our intuitive calendar system.'
    },
    {
      icon: FiCreditCard,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing with instant confirmations.'
    },
    {
      icon: FiUsers,
      title: 'Member Discounts',
      description: 'Gym members get special rates when booking physiotherapy sessions.'
    },
    {
      icon: FiTrendingUp,
      title: 'Grow Your Practice',
      description: 'Expand your reach and grow your physiotherapy business.'
    },
    {
      icon: FiShield,
      title: 'Trusted Platform',
      description: 'Verified professionals and secure transactions you can trust.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Registered Gyms' },
    { number: '1,200+', label: 'Physiotherapists' },
    { number: '10,000+', label: 'Bookings Made' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Connect Gyms with
              <span className="text-primary-200"> Physiotherapists</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto"
            >
              The premier platform for gym owners to rent treatment spaces and physiotherapists to find the perfect location for their practice.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/register"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                to="/spaces"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Browse Spaces
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RehabHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make it easy for gym owners and physiotherapists to connect and create successful partnerships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={feature.icon} className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of gym owners and physiotherapists who trust RehabHub to grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Sign Up Now
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Already a Member?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;