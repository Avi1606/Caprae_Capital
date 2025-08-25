import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProgressBar } from '../common/ProgressBar.tsx';
import { FormField } from './FormField.tsx';
import { OnboardingQuestion, UserType } from '../../types';

interface OnboardingViewProps {
  questions: OnboardingQuestion[];
  currentStep: number;
  userType: UserType;
  onNext: () => void;
  onPrevious: () => void;
  onFieldChange: (field: string, value: any) => void;
}

export const OnboardingView: React.FC<OnboardingViewProps> = ({
  questions,
  currentStep,
  userType,
  onNext,
  onPrevious,
  onFieldChange
}) => {
  const currentQuestion = questions[currentStep];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto py-12 px-6">
        <ProgressBar currentStep={currentStep} totalSteps={questions.length} />

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.title}</h2>
          
          <div className="space-y-6">
            {currentQuestion.fields.map((field, index) => (
              <FormField
                key={index}
                field={field}
                onChange={(value) => onFieldChange(field.name, value)}
              />
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={onPrevious}
              disabled={currentStep === 0}
              className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
            <button
              onClick={onNext}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center"
            >
              {currentStep === questions.length - 1 ? 'Complete' : 'Next'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};