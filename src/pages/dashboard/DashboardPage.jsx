import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import GymOwnerDashboard from './GymOwnerDashboard';
import PhysiotherapistDashboard from './PhysiotherapistDashboard';
import ClientDashboard from './ClientDashboard';
import AdminDashboard from './AdminDashboard';

const DashboardPage = () => {
  const { userProfile } = useAuth();

  if (!userProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  switch (userProfile.user_type) {
    case 'gym_owner':
      return <GymOwnerDashboard />;
    case 'physiotherapist':
      return <PhysiotherapistDashboard />;
    case 'client':
      return <ClientDashboard />;
    case 'admin':
      return <AdminDashboard />;
    default:
      return <PhysiotherapistDashboard />;
  }
};

export default DashboardPage;