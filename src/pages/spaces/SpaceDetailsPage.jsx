import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiStar, FiWifi, FiCar, FiClock, FiUsers, FiPhone, FiMail, FiCalendar } = FiIcons;

const SpaceDetailsPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock data - in real app, fetch based on ID
  const space = {
    id: 1,
    name: 'FitZone Treatment Room A',
    gym: 'FitZone Gym',
    location: '123 Main St, Downtown',
    price: 75,
    rating: 4.8,
    reviews: 24,
    description: 'A fully equipped private treatment room perfect for physiotherapy sessions. Features professional massage table, adjustable lighting, and climate control for optimal patient comfort.',
    amenities: [
      'Professional Massage Table',
      'WiFi',
      'Parking',
      'Air Conditioning',
      'Private Entrance',
      'Sound System',
      'Towels Provided',
      'Disinfection Station'
    ],
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800'
    ],
    available: true,
    distance: '0.5 miles',
    dimensions: '12ft x 10ft',
    capacity: '1-2 people',
    gymOwner: {
      name: 'John Davis',
      phone: '+1 (555) 123-4567',
      email: 'john@fitzone.com',
      rating: 4.9,
      responseTime: '< 1 hour'
    },
    availability: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM',
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
  };

  const reviews = [
    {
      id: 1,
      user: 'Dr. Sarah Johnson',
      rating: 5,
      comment: 'Excellent facility with professional equipment. The room is clean and well-maintained.',
      date: '2024-01-10',
      verified: true
    },
    {
      id: 2,
      user: 'Dr. Mike Chen',
      rating: 5,
      comment: 'Perfect space for my practice. John is very responsive and accommodating.',
      date: '2024-01-08',
      verified: true
    },
    {
      id: 3,
      user: 'Dr. Emma Wilson',
      rating: 4,
      comment: 'Great location and amenities. Would recommend to other physiotherapists.',
      date: '2024-01-05',
      verified: true
    }
  ];

  const getAmenityIcon = (amenity) => {
    const amenityIcons = {
      'WiFi': FiWifi,
      'Parking': FiCar,
      'Air Conditioning': FiClock,
      'default': FiStar
    };
    return amenityIcons[amenity] || amenityIcons.default;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/spaces" className="text-gray-500 hover:text-gray-700">
                  Spaces
                </Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{space.name}</span>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={space.images[selectedImage]}
                  alt={space.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-4">
                  <div className="flex space-x-2 overflow-x-auto">
                    {space.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                          selectedImage === index ? 'ring-2 ring-primary-500' : ''
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${space.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Space Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6 mb-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{space.name}</h1>
                  <p className="text-lg text-gray-600">{space.gym}</p>
                  <div className="flex items-center text-gray-600 mt-1">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                    <span>{space.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-600">${space.price}</div>
                  <div className="text-gray-500">per hour</div>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon
                      key={i}
                      icon={FiStar}
                      className={`w-5 h-5 ${i < Math.floor(space.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">
                  {space.rating} ({space.reviews} reviews)
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUsers} className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Capacity</div>
                    <div className="font-medium">{space.capacity}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Dimensions</div>
                    <div className="font-medium">{space.dimensions}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm text-gray-500">Distance</div>
                    <div className="font-medium">{space.distance}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{space.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {space.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-600">
                      <SafeIcon icon={getAmenityIcon(amenity)} className="w-4 h-4" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Availability</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Object.entries(space.availability).map(([day, hours]) => (
                    <div key={day} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="capitalize font-medium text-gray-700">{day}</span>
                      <span className="text-gray-600">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Reviews</h3>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-gray-900">{review.user}</h4>
                          {review.verified && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <SafeIcon
                              key={i}
                              icon={FiStar}
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-6"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-1">${space.price}</div>
                <div className="text-gray-500">per hour</div>
              </div>

              <Link
                to={`/booking/${space.id}`}
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5" />
                <span>Book Now</span>
              </Link>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">Free cancellation up to 24 hours before</p>
              </div>
            </motion.div>

            {/* Gym Owner Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Gym Owner</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{space.gymOwner.name}</h4>
                  <div className="flex items-center">
                    <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-600 ml-1">{space.gymOwner.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <SafeIcon icon={FiPhone} className="w-4 h-4" />
                  <span className="text-sm">{space.gymOwner.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <SafeIcon icon={FiMail} className="w-4 h-4" />
                  <span className="text-sm">{space.gymOwner.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span className="text-sm">Responds {space.gymOwner.responseTime}</span>
                </div>
              </div>

              <button className="w-full bg-white text-primary-600 border border-primary-600 py-2 px-4 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                Contact Owner
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailsPage;