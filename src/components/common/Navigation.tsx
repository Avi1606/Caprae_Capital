import React from 'react';
import { Building2, User } from 'lucide-react';

interface NavigationProps {
  onBackClick?: () => void;
  showBackButton?: boolean;
  backText?: string;
  onOpenMessages?: () => void;
  onOpenProfile?: () => void;
  onOpenSettings?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  onBackClick, 
  showBackButton = false, 
  backText = "← Back to Dashboard",
  onOpenMessages,
  onOpenProfile,
  onOpenSettings
}) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold">Caprae Connect</span>
          </div>
          <div className="flex items-center space-x-6">
            {showBackButton && onBackClick && (
              <button 
                onClick={onBackClick}
                className="text-gray-600 hover:text-indigo-600"
              >
                {backText}
              </button>
            )}
            {!showBackButton && (
              <>
                <button className="text-gray-600 hover:text-indigo-600" onClick={onOpenMessages}>Messages</button>
                <button className="text-gray-600 hover:text-indigo-600" onClick={onOpenProfile}>Profile</button>
                <button className="text-gray-600 hover:text-indigo-600" onClick={onOpenSettings}>Settings</button>
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};