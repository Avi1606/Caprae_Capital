import React from 'react';
import { LandingView } from './components/landing/LandingView.tsx';
import { OnboardingView } from './components/onboarding/OnboardingView.tsx';
import { SellerDashboard } from './components/seller/SellerDashboard.tsx';
import { BuyerDashboard } from './components/buyer/BuyerDashboard.tsx';
import { DealWorkflow } from './components/deal/DealWorkflow.tsx';
import { ProfileView } from './components/common/ProfileView.tsx';
import { SettingsView } from './components/common/SettingsView.tsx';
import { usePlatformState } from './hooks/usePlatformState.ts';
import { buyerProfiles, sellerQuestions, buyerQuestions } from './data/mockData.ts';
import { BuyerProfile } from './types';

const App = () => {
    const {
        currentView,
        setCurrentView,
        userType,
        onboardingStep,
        setOnboardingStep,
        selectedBuyer,
        setSelectedBuyer,
        matches,
        setMatches,
        dealStage,
        setDealStage,
        aiAnalysis,
        updateFormData,
        startOnboarding,
        simulateAIAnalysis
    } = usePlatformState();

    const nextStep = () => {
        const totalSteps = userType === 'seller' ? sellerQuestions.length : buyerQuestions.length;
        if (onboardingStep < totalSteps - 1) {
            setOnboardingStep(onboardingStep + 1);
        } else {
            setCurrentView(userType === 'seller' ? 'sellerDashboard' : 'buyerDashboard');
        }
    };

    const prevStep = () => {
        if (onboardingStep > 0) {
            setOnboardingStep(onboardingStep - 1);
        }
    };

    const handleMatch = (buyerId: number) => {
        setMatches((prev: any) => [...prev, buyerId]);
        setTimeout(() => {
            setCurrentView('dealWorkflow');
            setSelectedBuyer(buyerProfiles.find((b: { id: number; }) => b.id === buyerId) || null);
        }, 1000);
    };

    switch (currentView) {
        case 'onboarding':
            return (
                <OnboardingView
                    questions={userType === 'seller' ? sellerQuestions : buyerQuestions}
                    currentStep={onboardingStep}
                    userType={userType}
                    onNext={nextStep}
                    onPrevious={prevStep}
                    onFieldChange={updateFormData}
                />
            );
        case 'sellerDashboard':
            return (
                <SellerDashboard
                    buyers={buyerProfiles}
                    matches={matches}
                    onMatch={handleMatch}
                    onOpenProfile={(buyerId: number) => {
                        const b = buyerProfiles.find((x: any) => x.id === buyerId) || null;
                        setSelectedBuyer(b);
                        setCurrentView('dealWorkflow');
                    }}
                    onOpenSettings={() => setCurrentView('settings')}
                    onOpenProfileView={() => setCurrentView('profile')}
                />
            );
        case 'dealWorkflow':
            return (
                <DealWorkflow
                    selectedBuyer={selectedBuyer}
                    dealStage={dealStage}
                    aiAnalysis={aiAnalysis}
                    onBackClick={() => setCurrentView('sellerDashboard')}
                    onStageChange={setDealStage}
                    onDocumentUpload={simulateAIAnalysis}
                />
            );
        case 'buyerDashboard':
            return (
                <BuyerDashboard onBackToLanding={() => setCurrentView('landing')} />
            );
        case 'profile':
            return <ProfileView />;
        case 'settings':
            return <SettingsView />;
        default:
            return (
                <LandingView onStartOnboarding={startOnboarding} />
            );
    }
};

export default App;