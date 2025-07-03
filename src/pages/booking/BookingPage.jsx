import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import { format, addDays, isToday, isTomorrow } from 'date-fns';
import toast from 'react-hot-toast';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiClock, FiMapPin, FiUser, FiCreditCard, FiCheck } = FiIcons;

const BookingPage = () => {
  const { spaceId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [duration, setDuration] = useState(1);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isGymMember, setIsGymMember] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock space data
  const space = {
    id: spaceId,
    name: 'FitZone Treatment Room A',
    gym: 'FitZone Gym',
    location: '123 Main St, Downtown',
    price: 75,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400'
  };

  const availableSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const bookedSlots = ['10:00 AM', '2:00 PM', '4:00 PM'];

  const getAvailableSlots = () => {
    return availableSlots.filter(slot => !bookedSlots.includes(slot));
  };

  const calculateTotal = () => {
    const basePrice = space.price * duration;
    const discount = isGymMember ? 0.15 : 0;
    const discountAmount = basePrice * discount;
    const subtotal = basePrice - discountAmount;
    const platformFee = subtotal * 0.05;
    const total = subtotal + platformFee;
    
    return {
      basePrice,
      discount: discountAmount,
      platformFee,
      total
    };
  };

  const handleBooking = async () => {
    if (!selectedTime || !clientInfo.name || !clientInfo.email || !clientInfo.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Booking confirmed successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Booking failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    return format(date, 'MMM d, yyyy');
  };

  const pricing = calculateTotal();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Book Your Space</h1>
          <p className="text-gray-600 mt-2">Complete your booking for {space.name}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Space Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{space.name}</h3>
                  <p className="text-gray-600">{space.gym}</p>
                  <div className="flex items-center text-gray-600 mt-1">
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 mr-1" />
                    <span className="text-sm">{space.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Date Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                Select Date
              </h3>
              <div className="calendar-container">
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 60)}
                  className="w-full"
                />
              </div>
            </motion.div>

            {/* Time Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiClock} className="w-5 h-5 mr-2" />
                Select Time
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {getAvailableSlots().map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border text-center transition-colors ${
                      selectedTime === time
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Duration Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Duration</h3>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((hours) => (
                  <button
                    key={hours}
                    onClick={() => setDuration(hours)}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      duration === hours
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
                    }`}
                  >
                    {hours} hour{hours > 1 ? 's' : ''}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Client Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiUser} className="w-5 h-5 mr-2" />
                Client Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter client's full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Notes
                  </label>
                  <textarea
                    value={clientInfo.notes}
                    onChange={(e) => setClientInfo({...clientInfo, notes: e.target.value})}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Any special requirements or notes"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isGymMember}
                    onChange={(e) => setIsGymMember(e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Client is a gym member (15% discount)
                  </span>
                </label>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiCreditCard} className="w-5 h-5 mr-2" />
                Payment Method
              </h3>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Credit/Debit Card</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">PayPal</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Pay at Location</span>
                </label>
              </div>
            </motion.div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-6 sticky top-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">{formatDate(selectedDate)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">{selectedTime || 'Not selected'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{duration} hour{duration > 1 ? 's' : ''}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Space rental:</span>
                    <span>${pricing.basePrice}</span>
                  </div>
                  {isGymMember && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">Gym member discount:</span>
                      <span className="text-green-600">-${pricing.discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Platform fee:</span>
                    <span>${pricing.platformFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-semibold border-t border-gray-200 pt-2">
                    <span>Total:</span>
                    <span>${pricing.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBooking}
                disabled={loading || !selectedTime}
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiCheck} className="w-5 h-5" />
                    <span>Confirm Booking</span>
                  </>
                )}
              </button>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Free cancellation up to 24 hours before your session
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;