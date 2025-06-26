import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import {
  createContext,
  useState,
  useMemo,
  type ReactNode,
  useContext,
} from 'react';

import { lightTheme, darkTheme } from './theme.config';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

type ThemeProviderPropsType = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderPropsType) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    console.log(theme.toString());
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const muiTheme = useMemo(
    () => (theme === 'light' ? lightTheme : darkTheme),
    [theme],
  );

  console.log({ muiTheme });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeProvider;
