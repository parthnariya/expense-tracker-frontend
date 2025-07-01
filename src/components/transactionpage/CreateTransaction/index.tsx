import { Fab } from '@mui/material';
import { Plus } from 'lucide-react';
import { useState } from 'react';

import TransactionModal from './TransactionModal';

const CreateTransaction = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fab
        aria-label="add"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
        }}
        variant="circular"
        onClick={handleOpen}
      >
        <Plus size={28} />
      </Fab>
      <TransactionModal mode="create" open={open} onClose={handleClose} />
    </>
  );
};

export default CreateTransaction;
