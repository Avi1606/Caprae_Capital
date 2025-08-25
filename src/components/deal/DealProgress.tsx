import React from 'react';
import { CheckCircle } from 'lucide-react';
import { DealStage } from '../../types';

interface DealProgressProps {
  stages: DealStage[];
}

export const DealProgress: React.FC<DealProgressProps> = ({ stages }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6">Deal Progress</h2>
      <div className="flex items-center justify-between">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                stage.status === 'completed' ? 'bg-green-500 text-white' :
                stage.status === 'active' ? 'bg-indigo-600 text-white' :
                'bg-gray-200 text-gray-600'
              }`}>
                {stage.status === 'completed' ? <CheckCircle className="w-5 h-5" /> : index + 1}
              </div>
              <div className="text-xs text-center mt-2 max-w-20">
                {stage.name}
              </div>
            </div>
            {index < stages.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${
                stage.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};