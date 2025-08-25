import React from 'react';
import { DollarSign, MapPin, Briefcase, Star, CheckCircle, Heart, MessageCircle } from 'lucide-react';
import { BuyerProfile } from '../../types';

interface BuyerCardProps {
  buyer: BuyerProfile;
  isMatched: boolean;
  onConnect: (buyerId: number) => void;
  onOpenProfile?: (buyer: BuyerProfile) => void;
}

export const BuyerCard: React.FC<BuyerCardProps> = ({ buyer, isMatched, onConnect, onOpenProfile }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6">
        {/* Avatar and Basic Info */}
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {buyer.avatar}
          </div>
          <div className="ml-4 flex-1">
            <div className="flex items-center">
              <h3 className="text-xl font-semibold text-gray-900">{buyer.name}</h3>
              {buyer.verified && <CheckCircle className="w-5 h-5 text-green-500 ml-2" />}
            </div>
            <p className="text-gray-600">{buyer.company}</p>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{buyer.rating}</span>
            </div>
          </div>
          {onOpenProfile && (
            <button
              onClick={() => onOpenProfile(buyer)}
              className="text-indigo-600 text-sm hover:text-indigo-800"
            >
              View
            </button>
          )}
        </div>

        {/* Key Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 ml-2">{buyer.investmentRange}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 ml-2">{buyer.location}</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600 ml-2">{buyer.experience} • {buyer.previousDeals} deals</span>
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {buyer.specialization.map((spec, index) => (
              <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-600 mb-6 line-clamp-3">{buyer.bio}</p>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => onConnect(buyer.id)}
            disabled={isMatched}
            className="flex-1 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isMatched ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                Connected
              </>
            ) : (
              <>
                <Heart className="w-5 h-5 mr-2" />
                Connect
              </>
            )}
          </button>
          <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <MessageCircle className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};