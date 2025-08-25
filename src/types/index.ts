export interface BuyerProfile {
  id: number;
  name: string;
  company: string;
  industry: string;
  investmentRange: string;
  location: string;
  experience: string;
  previousDeals: number;
  fundingSource: string;
  specialization: string[];
  avatar: string;
  rating: number;
  verified: boolean;
  bio: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'textarea' | 'select' | 'multiselect';
  placeholder?: string;
  options?: string[];
}

export interface OnboardingQuestion {
  title: string;
  fields: FormField[];
}

export interface AIAnalysis {
  type: string;
  summary: string;
  keyFindings: string[];
  riskFactors: string[];
  confidence: number;
}

export interface DealStage {
  id: string;
  name: string;
  status: 'completed' | 'active' | 'pending';
}

export type ViewType = 'landing' | 'onboarding' | 'sellerDashboard' | 'buyerDashboard' | 'dealWorkflow' | 'profile' | 'settings';
export type UserType = 'seller' | 'buyer' | '';