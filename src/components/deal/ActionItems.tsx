import React from 'react';
import { Clock, Shield, AlertCircle, Target, CheckCircle } from 'lucide-react';

interface ActionItemsProps {
  dealStage: string;
  onPreviousStage: () => void;
  onNextStage: () => void;
}

export const ActionItems: React.FC<ActionItemsProps> = ({
  dealStage,
  onPreviousStage,
  onNextStage
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
      <h2 className="text-xl font-semibold mb-6">Next Steps & Action Items</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium mb-4 flex items-center">
            <Clock className="w-5 h-5 text-indigo-600 mr-2" />
            Pending Actions
          </h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-3" />
              <div className="flex-1">
                <p className="text-sm font-medium">Sign NDA Agreement</p>
                <p className="text-xs text-gray-600">Due: Tomorrow</p>
              </div>
              <button className="text-indigo-600 text-sm hover:text-indigo-800">
                Complete
              </button>
            </div>
            
            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
              <Target className="w-5 h-5 text-blue-600 mr-3" />
              <div className="flex-1">
                <p className="text-sm font-medium">Schedule Management Presentation</p>
                <p className="text-xs text-gray-600">Due: This week</p>
              </div>
              <button className="text-indigo-600 text-sm hover:text-indigo-800">
                Schedule
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-4 flex items-center">
            <Shield className="w-5 h-5 text-green-600 mr-2" />
            Completed Actions
          </h3>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <div className="flex-1">
                <p className="text-sm font-medium">Initial buyer screening</p>
                <p className="text-xs text-gray-600">Completed 3 days ago</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <div className="flex-1">
                <p className="text-sm font-medium">Financial documents uploaded</p>
                <p className="text-xs text-gray-600">Completed 2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stage Navigation */}
      <div className="mt-8 pt-6 border-t">
        <div className="flex justify-between items-center">
          <button
            onClick={onPreviousStage}
            className="text-gray-600 hover:text-indigo-600"
            disabled={dealStage === 'initial'}
          >
            ← Previous Stage
          </button>
          
          <div className="text-center">
            <p className="text-sm text-gray-600">Current Stage</p>
            <p className="font-semibold text-lg">Due Diligence</p>
          </div>
          
          <button
            onClick={onNextStage}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Advance to Valuation →
          </button>
        </div>
      </div>
    </div>
  );
};