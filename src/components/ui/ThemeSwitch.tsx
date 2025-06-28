import type { MouseEventHandler } from 'react';

import { Box, IconButton } from '@mui/material';
import { Sun, Moon } from 'lucide-react';

import { useTheme } from '@/theme/ThemeProvider';

const ThemeSwitch = () => {
  const { toggleTheme, theme } = useTheme();

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    toggleTheme();
  };

  return (
    <IconButton
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 1,
      }}
      onClick={onClickHandler}
    >
      <Box
        color={(theme) => theme.palette.text.secondary}
        height="20px"
        sx={{ position: 'relative' }}
        width="20px"
      >
        <Sun
          size={20}
          style={{
            position: 'absolute',
            inset: 0,
            transition: 'all 300ms',
            opacity: theme === 'light' ? '1' : '0',
            transform:
              theme === 'light'
                ? 'rotate(0deg) scale(1)'
                : 'rotate(90deg) scale(0.75)',
          }}
        />
        <Moon
          size={20}
          style={{
            position: 'absolute',
            inset: 0,
            transition: 'all 300ms',
            opacity: theme === 'light' ? '0' : '1',
            transform:
              theme === 'dark'
                ? 'rotate(0deg) scale(1)'
                : 'rotate(90deg) scale(0.75)',
          }}
        />
      </Box>
    </IconButton>
  );
};

export default ThemeSwitch;
