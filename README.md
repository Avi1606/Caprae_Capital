# Caprae Connect Platform

A modern M&A platform built with React and TypeScript that connects buyers and sellers with AI-powered tools and guided workflows.

## Features

- **Smart Matching**: AI algorithm matches sellers with qualified buyers
- **AI-Powered Due Diligence**: Automated document analysis and financial summarization
- **Guided Process**: Step-by-step M&A workflow with milestone tracking
- **Real-time Communication**: Built-in messaging and collaboration tools

## Project Structure

```
src/
├── components/           # React components
│   ├── common/          # Shared components
│   ├── buyer/           # Buyer-specific components
│   ├── seller/          # Seller-specific components
│   ├── deal/            # Deal workflow components
│   ├── onboarding/      # Onboarding flow components
│   └── landing/         # Landing page components
├── data/                # Mock data and constants
├── hooks/               # Custom React hooks
├── types/               # TypeScript type definitions
└── App.tsx              # Main application component
```

## Components Overview

### Common Components
- `Navigation`: Shared navigation header
- `ProgressBar`: Progress indicator for multi-step flows

### Onboarding Components
- `OnboardingView`: Main onboarding container
- `FormField`: Dynamic form field component

### Buyer Components
- `BuyerCard`: Individual buyer profile card
- `BuyerDashboard`: Coming soon placeholder

### Seller Components
- `SellerDashboard`: Main seller interface with buyer discovery

### Deal Components
- `DealWorkflow`: Main deal management interface
- `DealProgress`: Visual deal stage tracker
- `AIDocumentAnalysis`: Document upload and AI analysis
- `CommunicationHub`: Messaging interface
- `ActionItems`: Task management and next steps

### Landing Components
- `LandingView`: Homepage with user type selection

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view in browser

## Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- Custom hooks for state management

## Key Features Implementation

### State Management
The `usePlatformState` hook manages all application state including:
- Current view navigation
- User onboarding progress
- Deal workflow state
- AI analysis results

### Type Safety
Full TypeScript implementation with comprehensive type definitions for all data structures and component props.

### Responsive Design
Mobile-first responsive design using Tailwind CSS utilities.

### Component Architecture
Modular component architecture with clear separation of concerns and reusable components.