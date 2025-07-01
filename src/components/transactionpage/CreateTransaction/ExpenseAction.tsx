import type { MouseEventHandler } from 'react';

import { Button, Stack } from '@mui/material';

type ExpenseActionProps = {
  onCancel: () => void;
};

const ExpenseAction = ({ onCancel }: ExpenseActionProps) => {
  const cancelClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onCancel();
  };

  return (
    <Stack direction="row" justifyContent="end" spacing={0.5} width="100%">
      <Button
        size="medium"
        type="button"
        variant="outlined"
        onClick={cancelClickHandler}
      >
        Cancel
      </Button>
      <Button size="medium" type="submit" variant="contained">
        Save
      </Button>
    </Stack>
  );
};

export default ExpenseAction;
