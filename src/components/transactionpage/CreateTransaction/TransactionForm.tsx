import { Stack } from '@mui/material';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';

import TransactionAction from './TransactionAction';
import TransactionAmount from './TransactionAmount';
import TransactionCategory from './TransactionCategory';
import TransactionDate from './TransactionDate';
import TransactionDescription from './TransactionDescription';
import TransactionTitle from './TransactionTitle';
import TransactionTypeSelection from './TransactionTypeSelection';

import {
  useCreateTransaction,
  useUpdateTransaction,
} from '@/hooks/useTransactions';
import { selectCurrentSpace } from '@/store/slices/spaces/spaceSelectors';

export interface TransactionFormData {
  type: 'income' | 'expense';
  title: string;
  amount: number;
  category: string;
  date?: string;
  description: string;
}

interface TransactionFormProps {
  mode?: 'create' | 'edit';
  defaultValues?: TransactionFormData;
  transactionId?: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const TransactionForm = ({
  mode = 'create',
  defaultValues,
  transactionId,
  onCancel,
}: TransactionFormProps) => {
  const currentSpace = useSelector(selectCurrentSpace);

  const { mutate: createTransaction, isPending } = useCreateTransaction();

  const { mutate: updateTransaction, isPending: isUpdating } =
    useUpdateTransaction();

  const formMethods = useForm<TransactionFormData>({
    defaultValues: {
      type: defaultValues?.type || 'income',
      title: defaultValues?.title || '',
      amount: defaultValues?.amount || -1,
      category: defaultValues?.category || '',
      date: defaultValues?.date || undefined,
      description: defaultValues?.description || '',
    },
  });

  const onSubmit: SubmitHandler<TransactionFormData> = (data) => {
    if (!currentSpace) {
      return;
    }
    const spaceId = currentSpace.id;

    if (mode === 'create') {
      createTransaction({
        spaceId,
        data,
      });
    } else if (mode === 'edit' && transactionId) {
      updateTransaction({
        spaceId,
        transactionId,
        data,
      });
    }
  };

  const handleCancel = () => {
    formMethods.reset();
    onCancel?.();
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <Stack p={3} spacing={3}>
          <TransactionTypeSelection />
          <TransactionTitle />
          <TransactionAmount />
          <TransactionCategory />
          <TransactionDate />
          <TransactionDescription />
          <TransactionAction
            isLoading={isPending || isUpdating}
            onCancel={handleCancel}
          />
        </Stack>
      </form>
    </FormProvider>
  );
};

export default TransactionForm;
