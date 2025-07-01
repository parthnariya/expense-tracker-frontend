import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material';
import { X } from 'lucide-react';

import TransactionForm, { type TransactionFormData } from './TransactionForm';

type TransactionModalProps = {
  mode?: 'create' | 'edit';
  defaultValues?: TransactionFormData;
  open: boolean;
  transactionId?: string;
  onClose?: () => void;
};

const TransactionModal = ({
  mode = 'create',
  defaultValues,
  open,
  transactionId,
  onClose,
}: TransactionModalProps) => {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <Dialog
      aria-describedby="create-transaction-modal-description"
      aria-labelledby="create-transaction-modal-title"
      fullWidth
      open={open}
      scroll="paper"
      onClose={handleClose}
    >
      <DialogTitle p={{ xs: 2, sm: 3 }}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Stack>
            <Typography
              fontWeight={700}
              id="create-transaction-modal-title"
              variant="h5"
            >
              New Transaction
            </Typography>
            <Typography
              color="text.secondary"
              fontWeight={400}
              id="create-transaction-modal-title"
              variant="body1"
            >
              Add a new transaction to your account
            </Typography>
          </Stack>

          <Typography aria-label="close" color="grey.500" onClick={handleClose}>
            <X size={22} />
          </Typography>
        </Stack>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 0 }}>
        <Box mx="auto" p={{ xs: 2, sm: 2, lg: 3 }}>
          <Box borderRadius={1} boxShadow={1}>
            <TransactionForm
              defaultValues={defaultValues}
              mode={mode}
              transactionId={transactionId}
              onCancel={handleClose}
            />
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionModal;
