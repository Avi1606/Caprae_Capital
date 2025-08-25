# Caprae Connect Platform

A modern React-based platform that connects buyers and sellers through intelligent matching and streamlined deal workflows.

## 🚀 Features

- **Smart Matching**: AI-powered buyer-seller matching system
- **Interactive Onboarding**: Guided onboarding process for both buyers and sellers
- **Deal Management**: Complete deal workflow management with progress tracking
- **AI Document Analysis**: Automated document analysis and insights
- **Communication Hub**: Centralized communication between parties
- **Real-time Dashboard**: Comprehensive dashboards for buyers and sellers
- **Profile Management**: User profile and settings management

## 🛠 Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Vercel-ready configuration

## 📁 Project Structure

```
src/
├── components/
│   ├── buyer/           # Buyer-specific components
│   ├── seller/          # Seller-specific components
│   ├── deal/            # Deal workflow components
│   ├── common/          # Shared components (Navigation, Profile, Settings)
│   ├── landing/         # Landing page components
│   └── onboarding/      # Onboarding flow components
├── data/                # Mock data and constants
├── hooks/               # Custom React hooks
└── types/               # TypeScript type definitions
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd caprae-connect-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`.

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🎯 Key Components

### Landing Page
- Hero section with platform overview
- User type selection (Buyer/Seller)
- Feature highlights and benefits

### Onboarding Flow
- Dynamic form fields based on user type
- Step-by-step guided process
- Form validation and progress tracking

### Dashboards
- **Seller Dashboard**: Manage listings, view matches, track deals
- **Buyer Dashboard**: Browse opportunities, manage preferences, view matches

### Deal Workflow
- Progress tracking through deal stages
- Action items management
- Communication tools
- Document analysis integration

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`.

### TypeScript
TypeScript configuration is in `tsconfig.json` with strict type checking enabled.

### PostCSS
PostCSS configuration for Tailwind processing is in `postcss.config.js`.

## 🚀 Deployment

### Vercel (Recommended)
The project includes a `vercel.json` configuration file for easy deployment:

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Manual Build
```bash
npm run build
```
The `build` folder will contain the production-ready files.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📊 State Management

The application uses a custom hook (`usePlatformState`) for centralized state management, handling:
- Current view navigation
- User type and onboarding progress
- Deal stages and workflow
- Buyer-seller matching
- AI analysis results

## 🤖 AI Integration

The platform includes AI-powered features:
- Document analysis for deal insights
- Buyer-seller matching algorithms
- Automated suggestions and recommendations

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop browsers
- Tablet devices
- Mobile phones

## 🎨 Design System

Built with a consistent design system featuring:
- Modern gradient backgrounds
- Glass morphism effects
- Consistent spacing and typography
- Accessible color contrasts
- Interactive hover states

## 🔒 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

For support and questions, please contact the development team.

---

Built with ❤️ using React and TypeScript
