import { useState, useEffect } from 'react';
import { ViewType, UserType, BuyerProfile, AIAnalysis } from '../types';

export const usePlatformState = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('currentView');
    return (saved as ViewType) || 'landing';
  });
  const [userType, setUserType] = useState<UserType>('');
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [selectedBuyer, setSelectedBuyer] = useState<BuyerProfile | null>(null);
  const [matches, setMatches] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('matches');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [dealStage, setDealStage] = useState('initial');
  const [aiAnalysis, setAiAnalysis] = useState<AIAnalysis | null>(null);
  const [uploadedDocs, setUploadedDocs] = useState<string[]>([]);

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const startOnboarding = (type: UserType) => {
    setUserType(type);
    setCurrentView('onboarding');
    setOnboardingStep(0);
  };

  const simulateAIAnalysis = (docType: string) => {
    setTimeout(() => {
      setAiAnalysis({
        type: docType,
        summary: "AI has analyzed the financial documents and identified key metrics, risk factors, and growth opportunities.",
        keyFindings: [
          "Revenue growth of 23% YoY",
          "Strong cash flow with 18% EBITDA margin",
          "Low customer concentration risk",
          "Potential for operational improvements"
        ],
        riskFactors: [
          "Dependency on single supplier",
          "Market competition increasing"
        ],
        confidence: 94
      });
    }, 2000);
  };

  // persistence side-effects
  useEffect(() => {
    try { localStorage.setItem('matches', JSON.stringify(matches)); } catch {}
  }, [matches]);

  useEffect(() => {
    try { localStorage.setItem('currentView', currentView); } catch {}
  }, [currentView]);

  return {
    currentView,
    setCurrentView,
    userType,
    setUserType,
    onboardingStep,
    setOnboardingStep,
    formData,
    setFormData,
    updateFormData,
    selectedBuyer,
    setSelectedBuyer,
    matches,
    setMatches,
    dealStage,
    setDealStage,
    aiAnalysis,
    setAiAnalysis,
    uploadedDocs,
    setUploadedDocs,
    startOnboarding,
    simulateAIAnalysis
  };
};