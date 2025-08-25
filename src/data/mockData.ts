import { BuyerProfile, OnboardingQuestion } from '../types';

export const buyerProfiles: BuyerProfile[] = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "TechVentures LLC",
    industry: "Technology",
    investmentRange: "$2M - $10M",
    location: "San Francisco, CA",
    experience: "12 years",
    previousDeals: 8,
    fundingSource: "Private Equity",
    specialization: ["SaaS", "E-commerce", "FinTech"],
    avatar: "SC",
    rating: 4.9,
    verified: true,
    bio: "Serial entrepreneur with 8 successful acquisitions in tech space. Focus on revenue-positive SaaS companies with strong growth metrics."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Growth Capital Partners",
    industry: "Healthcare",
    investmentRange: "$5M - $25M",
    location: "Austin, TX",
    experience: "15 years",
    previousDeals: 12,
    fundingSource: "Investment Fund",
    specialization: ["Healthcare", "Med-tech", "Digital Health"],
    avatar: "MR",
    rating: 4.8,
    verified: true,
    bio: "Healthcare-focused investor with extensive operational experience. Looking for innovative healthcare solutions with proven market traction."
  },
  {
    id: 3,
    name: "Jennifer Walsh",
    company: "Strategic Acquisitions",
    industry: "Manufacturing",
    investmentRange: "$1M - $15M",
    location: "Chicago, IL",
    experience: "10 years",
    previousDeals: 6,
    fundingSource: "Corporate",
    specialization: ["Manufacturing", "Supply Chain", "Industrial"],
    avatar: "JW",
    rating: 4.7,
    verified: true,
    bio: "Corporate development executive specializing in manufacturing and industrial acquisitions. Expertise in operational improvements and supply chain optimization."
  }
];

export const sellerQuestions: OnboardingQuestion[] = [
  {
    title: "Tell us about your business",
    fields: [
      { name: "companyName", label: "Company Name", type: "text", placeholder: "Acme Corp" },
      { name: "industry", label: "Industry", type: "select", options: ["Technology", "Healthcare", "Manufacturing", "Retail", "Services", "Other"] },
      { name: "foundedYear", label: "Year Founded", type: "number", placeholder: "2015" }
    ]
  },
  {
    title: "Financial Information",
    fields: [
      { name: "revenue", label: "Annual Revenue", type: "select", options: ["<$1M", "$1M-$5M", "$5M-$10M", "$10M-$50M", ">$50M"] },
      { name: "askingPrice", label: "Expected Valuation Range", type: "select", options: ["$1M-$5M", "$5M-$10M", "$10M-$25M", "$25M-$50M", ">$50M"] },
      { name: "reason", label: "Reason for Sale", type: "select", options: ["Retirement", "New Venture", "Partnership", "Strategic Exit", "Other"] }
    ]
  },
  {
    title: "Business Details",
    fields: [
      { name: "employees", label: "Number of Employees", type: "select", options: ["1-10", "11-50", "51-100", "101-500", ">500"] },
      { name: "location", label: "Primary Location", type: "text", placeholder: "City, State" },
      { name: "description", label: "Business Description", type: "textarea", placeholder: "Brief description of your business, key products/services, and competitive advantages..." }
    ]
  }
];

export const buyerQuestions: OnboardingQuestion[] = [
  {
    title: "Investment Profile",
    fields: [
      { name: "name", label: "Your Name", type: "text", placeholder: "John Smith" },
      { name: "company", label: "Company/Fund Name", type: "text", placeholder: "Growth Capital LLC" },
      { name: "investmentRange", label: "Investment Range", type: "select", options: ["$1M-$5M", "$5M-$10M", "$10M-$25M", "$25M-$50M", ">$50M"] }
    ]
  },
  {
    title: "Experience & Expertise",
    fields: [
      { name: "experience", label: "Years of Experience", type: "select", options: ["<5 years", "5-10 years", "10-15 years", ">15 years"] },
      { name: "previousDeals", label: "Previous Deals Completed", type: "select", options: ["0", "1-5", "6-10", "11-20", ">20"] },
      { name: "industries", label: "Preferred Industries", type: "multiselect", options: ["Technology", "Healthcare", "Manufacturing", "Retail", "Services", "Real Estate"] }
    ]
  },
  {
    title: "Additional Information",
    fields: [
      { name: "location", label: "Location", type: "text", placeholder: "City, State" },
      { name: "fundingSource", label: "Funding Source", type: "select", options: ["Personal Capital", "Private Equity", "Investment Fund", "Corporate", "Other"] },
      { name: "timeline", label: "Investment Timeline", type: "select", options: ["Immediate", "3-6 months", "6-12 months", "12+ months"] }
    ]
  }
];