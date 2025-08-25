import React from 'react';
import { Building2 } from 'lucide-react';

interface BuyerDashboardProps {
  onBackToLanding: () => void;
}

export const BuyerDashboard: React.FC<BuyerDashboardProps> = ({ onBackToLanding }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <Building2 className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Buyer Dashboard</h2>
        <p className="text-gray-600 mb-6">Coming soon - browse seller profiles and manage your deals</p>
        <button 
          onClick={onBackToLanding}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};