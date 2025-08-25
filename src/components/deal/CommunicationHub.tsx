import React from 'react';
import { BuyerProfile } from '../../types';

interface CommunicationHubProps {
  selectedBuyer: BuyerProfile | null;
}

export const CommunicationHub: React.FC<CommunicationHubProps> = ({ selectedBuyer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Communication Hub</h2>
      
      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
            {selectedBuyer?.avatar || 'B'}
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm">Hi! I'm very interested in your business. Can we schedule a call to discuss the details?</p>
            </div>
            <span className="text-xs text-gray-500 mt-1">2 hours ago</span>
          </div>
        </div>
        
        <div className="flex items-start justify-end">
          <div className="flex-1 flex justify-end">
            <div className="bg-indigo-600 text-white rounded-lg p-3 max-w-xs">
              <p className="text-sm">Absolutely! I've uploaded our financial documents for your review. Let me know when works best for you.</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium ml-3">
            You
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3">
            {selectedBuyer?.avatar || 'B'}
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm">Perfect! I'm available tomorrow at 2 PM EST. I'll review the documents before our call.</p>
            </div>
            <span className="text-xs text-gray-500 mt-1">1 hour ago</span>
          </div>
        </div>
      </div>
      
      <div className="flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg hover:bg-indigo-700">
          Send
        </button>
      </div>
    </div>
  );
};