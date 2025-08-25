import React from 'react';
import { Bot, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { AIAnalysis } from '../../types';

interface AIDocumentAnalysisProps {
  aiAnalysis: AIAnalysis | null;
  onUpload: (docType: string) => void;
}

export const AIDocumentAnalysis: React.FC<AIDocumentAnalysisProps> = ({
  aiAnalysis,
  onUpload
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Bot className="w-6 h-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">AI Document Analysis</h2>
      </div>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 mb-4">Upload financial documents for AI analysis</p>
        <button 
          onClick={() => onUpload('financial')}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
        >
          Upload Documents
        </button>
      </div>

      {aiAnalysis && (
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span className="font-medium">Analysis Complete ({aiAnalysis.confidence}% confidence)</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">{aiAnalysis.summary}</p>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm mb-2">Key Findings:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {aiAnalysis.keyFindings.map((finding, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {finding}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm mb-2">Risk Factors:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {aiAnalysis.riskFactors.map((risk, index) => (
                  <li key={index} className="flex items-center">
                    <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};