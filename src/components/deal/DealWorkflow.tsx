import React from 'react';
//
import { Navigation } from '../common/Navigation.tsx';
import { DealProgress } from './DealProgress.tsx';
import { AIDocumentAnalysis } from './AIDocumentAnalysis.tsx';
import { CommunicationHub } from './CommunicationHub.tsx';
import { ActionItems } from './ActionItems.tsx';
import { BuyerProfile, AIAnalysis, DealStage } from '../../types';

interface DealWorkflowProps {
  selectedBuyer: BuyerProfile | null;
  dealStage: string;
  aiAnalysis: AIAnalysis | null;
  onBackClick: () => void;
  onStageChange: (stage: string) => void;
  onDocumentUpload: (docType: string) => void;
}

export const DealWorkflow: React.FC<DealWorkflowProps> = ({
  selectedBuyer,
  dealStage,
  aiAnalysis,
  onBackClick,
  onStageChange,
  onDocumentUpload
}) => {
  const dealStages: DealStage[] = [
    { id: 'initial', name: 'Initial Discussion', status: 'completed' },
    { id: 'nda', name: 'NDA & Terms', status: dealStage === 'nda' ? 'active' : dealStage === 'initial' ? 'pending' : 'completed' },
    { id: 'due_diligence', name: 'Due Diligence', status: dealStage === 'due_diligence' ? 'active' : ['initial', 'nda'].includes(dealStage) ? 'pending' : 'completed' },
    { id: 'valuation', name: 'Valuation', status: dealStage === 'valuation' ? 'active' : ['initial', 'nda', 'due_diligence'].includes(dealStage) ? 'pending' : 'completed' },
    { id: 'negotiation', name: 'Final Negotiation', status: dealStage === 'negotiation' ? 'active' : ['initial', 'nda', 'due_diligence', 'valuation'].includes(dealStage) ? 'pending' : 'completed' },
    { id: 'closing', name: 'Closing', status: dealStage === 'closing' ? 'active' : 'pending' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onBackClick={onBackClick} showBackButton={true} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Deal Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {selectedBuyer?.avatar || 'B'}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  Deal with {selectedBuyer?.name || 'Buyer'}
                </h1>
                <p className="text-gray-600">{selectedBuyer?.company || 'Company'}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Deal Value</div>
              <div className="text-2xl font-bold text-green-600">$2.5M - $5M</div>
            </div>
          </div>
        </div>

        <DealProgress stages={dealStages} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AIDocumentAnalysis 
            aiAnalysis={aiAnalysis}
            onUpload={onDocumentUpload}
          />
          <CommunicationHub selectedBuyer={selectedBuyer} />
        </div>

        <ActionItems
          dealStage={dealStage}
          onPreviousStage={() => onStageChange('initial')}
          onNextStage={() => onStageChange('valuation')}
        />
      </div>
    </div>
  );
};