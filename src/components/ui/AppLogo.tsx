import { Stack, Typography } from '@mui/material';
import { PiggyBank } from 'lucide-react';

const AppLogo = () => {
  return (
    <Stack
      gap={1.2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        color={(theme) => theme.palette.primary.main}
      >
        <PiggyBank width="32px" height="32px" />
      </Stack>
      <Typography
        component="span"
        variant="h6"
        fontWeight="600"
        color="primary"
      >
        Expense Tracker
      </Typography>
    </Stack>
  );
};

export default AppLogo;

/**
 
<div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">FinanceTracker</span>
          </div>
 */
