import React from 'react';
import { ChevronRight, Building2, DollarSign, Users, FileText, TrendingUp } from 'lucide-react';
import { UserType } from '../../types';

interface LandingViewProps {
  onStartOnboarding: (type: UserType) => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onStartOnboarding }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Caprae Connect</span>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-indigo-600 px-4 py-2">About</button>
              <button className="text-gray-600 hover:text-indigo-600 px-4 py-2">How it Works</button>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">Sign In</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            The Modern Way to
            <span className="text-indigo-600"> Buy & Sell</span> Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with pre-qualified buyers and sellers. Streamline your M&A process with AI-powered tools and guided workflows.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => onStartOnboarding('seller')}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all shadow-lg flex items-center"
            >
              <Building2 className="w-5 h-5 mr-2" />
              I'm Selling My Business
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => onStartOnboarding('buyer')}
              className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transform hover:scale-105 transition-all shadow-lg flex items-center"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              I'm Looking to Buy
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Matching</h3>
            <p className="text-gray-600">Our AI algorithm matches sellers with the most qualified buyers based on industry, size, and investment criteria.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI-Powered Due Diligence</h3>
            <p className="text-gray-600">Automated document analysis and financial summarization to accelerate the due diligence process.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Guided Process</h3>
            <p className="text-gray-600">Step-by-step guidance through the entire M&A process with milestone tracking and expert support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};