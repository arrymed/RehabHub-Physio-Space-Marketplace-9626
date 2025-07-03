import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiMail, FiPhone, FiMapPin, FiCamera, FiSave, FiEdit3 } = FiIcons;

const ProfilePage = () => {
  const { userProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: userProfile?.first_name || '',
    lastName: userProfile?.last_name || '',
    email: userProfile?.email || '',
    phone: userProfile?.phone || '',
    address: userProfile?.address || '',
    bio: userProfile?.bio || '',
    specialties: userProfile?.specialties || [],
    qualifications: userProfile?.qualifications || [],
    experience: userProfile?.experience || '',
    hourlyRate: userProfile?.hourly_rate || '',
    gymName: userProfile?.gym_name || '',
    gymAddress: userProfile?.gym_address || '',
    gymDescription: userProfile?.gym_description || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderPhysiotherapistFields = () => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Experience (years)
          </label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
            placeholder="Years of experience"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hourly Rate ($)
          </label>
          <input
            type="number"
            name="hourlyRate"
            value={formData.hourlyRate}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
            placeholder="Hourly rate"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Specialties
        </label>
        {formData.specialties.map((specialty, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              value={specialty}
              onChange={(e) => handleArrayChange('specialties', index, e.target.value)}
              disabled={!isEditing}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
              placeholder="e.g., Sports Rehabilitation"
            />
            {isEditing && (
              <button
                type="button"
                onClick={() => removeArrayItem('specialties', index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        {isEditing && (
          <button
            type="button"
            onClick={() => addArrayItem('specialties')}
            className="text-primary-600 hover:text-primary-800 text-sm"
          >
            + Add Specialty
          </button>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Qualifications
        </label>
        {formData.qualifications.map((qualification, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              value={qualification}
              onChange={(e) => handleArrayChange('qualifications', index, e.target.value)}
              disabled={!isEditing}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
              placeholder="e.g., Master's in Physical Therapy"
            />
            {isEditing && (
              <button
                type="button"
                onClick={() => removeArrayItem('qualifications', index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        {isEditing && (
          <button
            type="button"
            onClick={() => addArrayItem('qualifications')}
            className="text-primary-600 hover:text-primary-800 text-sm"
          >
            + Add Qualification
          </button>
        )}
      </div>
    </>
  );

  const renderGymOwnerFields = () => (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gym Name
        </label>
        <input
          type="text"
          name="gymName"
          value={formData.gymName}
          onChange={handleChange}
          disabled={!isEditing}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
          placeholder="Your gym name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gym Address
        </label>
        <input
          type="text"
          name="gymAddress"
          value={formData.gymAddress}
          onChange={handleChange}
          disabled={!isEditing}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
          placeholder="Full gym address"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Gym Description
        </label>
        <textarea
          name="gymDescription"
          value={formData.gymDescription}
          onChange={handleChange}
          disabled={!isEditing}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
          placeholder="Describe your gym facilities and services"
        />
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account information and preferences</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Picture */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <div className="relative inline-block">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiUser} className="w-12 h-12 text-primary-600" />
                </div>
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors">
                    <SafeIcon icon={FiCamera} className="w-4 h-4" />
                  </button>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {formData.firstName} {formData.lastName}
              </h3>
              <p className="text-gray-600 capitalize">{userProfile?.user_type?.replace('_', ' ')}</p>
            </motion.div>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                >
                  <SafeIcon icon={FiEdit3} className="w-4 h-4" />
                  <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                    placeholder="Full address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    disabled={!isEditing}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
                    placeholder="Tell us about yourself"
                  />
                </div>

                {/* Role-specific fields */}
                {userProfile?.user_type === 'physiotherapist' && renderPhysiotherapistFields()}
                {userProfile?.user_type === 'gym_owner' && renderGymOwnerFields()}

                {isEditing && (
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Saving...</span>
                        </>
                      ) : (
                        <>
                          <SafeIcon icon={FiSave} className="w-4 h-4" />
                          <span>Save Changes</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;