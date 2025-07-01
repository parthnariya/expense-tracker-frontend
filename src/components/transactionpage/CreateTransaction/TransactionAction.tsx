import type { MouseEventHandler } from 'react';

import { Button, Stack } from '@mui/material';

type TransactionActionProps = {
  onCancel: () => void;
  isLoading: boolean;
};

const TransactionAction = ({ onCancel, isLoading }: TransactionActionProps) => {
  const cancelClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    onCancel();
  };

  return (
    <Stack direction="row" justifyContent="end" spacing={0.5} width="100%">
      <Button
        disabled={isLoading}
        size="medium"
        type="button"
        variant="outlined"
        onClick={cancelClickHandler}
      >
        Cancel
      </Button>
      <Button
        disabled={isLoading}
        loading={isLoading}
        size="medium"
        type="submit"
        variant="contained"
      >
        Save
      </Button>
    </Stack>
  );
};

export default TransactionAction;
