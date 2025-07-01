import {
  Fab,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
} from '@mui/material';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';

import ExpenseAction from './ExpenseAction';
import ExpenseAmount from './ExpenseAmount';
import ExpenseCategory from './ExpenseCategory';
import ExpenseDate from './ExpenseDate';
import ExpenseDescription from './ExpenseDescription';
import ExpenseTitle from './ExpenseTitle';
import ExpenseTypeSelection from './ExpenseTypeSelection';

interface CreateTransactionFormData {
  type: 'income' | 'expense';
  title: string;
  amount: number;
  category: string;
  date?: string;
  description: string;
}

const CreateTransaction = () => {
  const [open, setOpen] = useState(false);

  const formMethods = useForm<CreateTransactionFormData>({
    defaultValues: {
      type: 'income',
      title: '',
      amount: 0,
      category: '',
      date: undefined,
      description: '',
    },
  });

  const onSubmit: SubmitHandler<CreateTransactionFormData> = (data) => {
    // eslint-disable-next-line
    console.log('Form Data:', data);
    // setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    formMethods.reset();
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

            <Typography
              aria-label="close"
              color="grey.500"
              onClick={() => setOpen(false)}
            >
              <X size={22} />
            </Typography>
          </Stack>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 0 }}>
          <Box mx="auto" p={{ xs: 2, sm: 2, lg: 3 }}>
            <Box borderRadius={1} boxShadow={1}>
              <FormProvider {...formMethods}>
                <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                  <Stack p={3} spacing={3}>
                    <ExpenseTypeSelection />

                    <ExpenseTitle />

                    <ExpenseAmount />

                    <ExpenseCategory />

                    <ExpenseDate />

                    <ExpenseDescription />

                    <ExpenseAction onCancel={handleClose} />
                  </Stack>
                </form>
              </FormProvider>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateTransaction;
