import React from 'react';
import { Navigation } from '../common/Navigation.tsx';
import { BuyerCard } from '../buyer/BuyerCard.tsx';
import { BuyerProfile } from '../../types';

interface SellerDashboardProps {
  buyers: BuyerProfile[];
  matches: number[];
  onMatch: (buyerId: number) => void;
  onOpenProfile?: (buyerId: number) => void;
  onOpenSettings?: () => void;
  onOpenProfileView?: () => void;
}

export const SellerDashboard: React.FC<SellerDashboardProps> = ({ 
  buyers, 
  matches, 
  onMatch,
  onOpenProfile,
  onOpenSettings,
  onOpenProfileView
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        onOpenProfile={onOpenProfileView}
        onOpenSettings={onOpenSettings}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Discover Qualified Buyers</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {buyers.map((buyer) => (
            <BuyerCard
              key={buyer.id}
              buyer={buyer}
              isMatched={matches.includes(buyer.id)}
              onConnect={onMatch}
              onOpenProfile={() => onOpenProfile && onOpenProfile(buyer.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};