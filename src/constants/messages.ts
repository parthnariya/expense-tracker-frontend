import {
  BarChart3,
  DollarSign,
  Filter,
  Moon,
  Receipt,
  Smartphone,
  Tags,
  TrendingUp,
  Users,
} from 'lucide-react';

export const TRUST_INDICATOR = [
  {
    color: '#22c55e',
    detail: '100% Secure',
  },
  {
    color: '#3b82f6',
    detail: 'No Registration Required',
  },
  {
    color: '#a855f7',
    detail: 'Free to Use',
  },
];

export const FEATURES = [
  {
    icon: Receipt,
    title: 'Transaction Tracking',
    description:
      'Easily add, edit, and categorize all your financial transactions in one place. Keep track of every income and expense with detailed records.',
  },
  {
    icon: Tags,
    title: 'Smart Categorization',
    description:
      'Organize your transactions with custom categories. Get insights into your spending patterns across different areas of your life.',
  },
  {
    icon: BarChart3,
    title: 'Visual Analytics',
    description:
      'Transform your financial data into beautiful, interactive charts and graphs. Understand your money flow at a glance.',
  },
  {
    icon: Filter,
    title: 'Advanced Filtering',
    description:
      "Filter transactions by date range, category, or type. Find exactly what you're looking for with powerful search capabilities.",
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description:
      'Access your financial data anywhere, anytime. Fully responsive design works perfectly on desktop, tablet, and mobile devices.',
  },
  {
    icon: Moon,
    title: 'Dark Mode Support',
    description:
      'Choose between light and dark themes for comfortable viewing in any lighting condition. Your eyes will thank you.',
  },
];

export const MARKETING_STATS = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Users',
    description: 'People trust us with their financial data',
  },
  {
    icon: Receipt,
    value: '500K+',
    label: 'Transactions Tracked',
    description: 'Financial transactions managed successfully',
  },
  {
    icon: DollarSign,
    value: '$2.5M+',
    label: 'Money Managed',
    description: 'Total value of transactions processed',
  },
  {
    icon: TrendingUp,
    value: '95%',
    label: 'User Satisfaction',
    description: 'Users report better financial awareness',
  },
];

export const BENEFITS = [
  'Set up in under 30 seconds',
  'No registration or personal info required',
  'Start tracking transactions immediately',
  'Access powerful analytics and insights',
];
