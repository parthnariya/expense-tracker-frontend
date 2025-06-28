import { Stack, Typography } from '@mui/material';
import { PiggyBank } from 'lucide-react';

const AppLogo = () => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      gap={1.2}
      justifyContent="center"
    >
      <Stack
        alignItems="center"
        color={(theme) => theme.palette.primary.main}
        justifyContent="center"
      >
        <PiggyBank height="32px" width="32px" />
      </Stack>
      <Typography
        color="primary"
        component="span"
        fontWeight="600"
        variant="h6"
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
