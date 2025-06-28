import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    green: Palette['grey'];
    red: Palette['grey'];
    blue: Palette['grey'];
  }
  interface PaletteOptions {
    green?: PaletteOptions['grey'];
    red?: PaletteOptions['grey'];
    blue?: PaletteOptions['grey'];
  }
}

// Light Theme Configuration
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976D2', // Blue for primary actions
    },
    secondary: {
      main: '#388E3C', // Green for secondary actions and income
    },
    background: {
      default: '#F5F7FA', // Light gray-blue background
      paper: '#FFFFFF', // White for surfaces (cards, modals)
    },
    text: {
      primary: '#1A2027', // Dark gray for primary text
      secondary: '#6B7280', // Medium gray for secondary text
    },
    warning: {
      main: '#F59E0B', // Amber for highlights
    },
    error: {
      main: '#D32F2F', // Red for errors and expenses
    },
    divider: '#E5E7EB', // Light gray for dividers
    grey: {
      '900': '#111827',
      '600': '#4b5563',
      '50': '#f9fafb',
      '100': '#f3f4f6',
      '800': '#1f2937',
    },
    green: {
      '100': '#dcfce7',
    },
    red: {
      '100': '#fee2e2',
    },
    blue: {
      '100': '#dbeafe',
      '200': '#bfdbfe',
      '500': '#3b82f6',
      '600': '#2563eb',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 500 },
    h2: { fontSize: '2rem', fontWeight: 500 },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem' },
  },
});

// Dark Theme Configuration
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#42A5F5', // Light blue for primary actions
    },
    secondary: {
      main: '#66BB6A', // Light green for secondary actions and income
    },
    background: {
      default: '#121212', // Near-black background
      paper: '#1E1E1E', // Dark gray for surfaces
    },
    text: {
      primary: '#E0E0E0', // Light gray for primary text
      secondary: '#B0B0B0', // Medium gray for secondary text
    },
    warning: {
      main: '#FBBF24', // Bright amber for highlights
    },
    error: {
      main: '#EF5350', // Light red for errors and expenses
    },
    divider: '#2D2D2D', // Dark gray for dividers
    grey: {
      '900': '#FFFFFF',
      '600': '#d1d5db',
      '50': '#1e293b',
      '100': '#334155',
      '800': '#e5e7eb',
    },
    green: {
      '100': '#dcfce7',
    },
    red: {
      '100': '#7f1d1d',
    },
    blue: {
      '100': '#1e3a8a',
      '200': '#1e40af',
      '500': '#1d4ed8 ',
      '600': '#1e40af',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 500 },
    h2: { fontSize: '2rem', fontWeight: 500 },
    body1: { fontSize: '1rem' },
    body2: { fontSize: '0.875rem' },
  },
});

// Apply responsive font sizes for both themes
const responsiveLightTheme = responsiveFontSizes(lightTheme);
const responsiveDarkTheme = responsiveFontSizes(darkTheme);

export { responsiveLightTheme as lightTheme, responsiveDarkTheme as darkTheme };
