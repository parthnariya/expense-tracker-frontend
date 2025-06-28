import { Container } from '@mui/material';

import SummaryCardsSection from '@/components/transactionpage/SummaryCardsSection';
import TransactionTable from '@/components/transactionpage/TransactionTable';

const TransactionPage = () => {
  return (
    <Container maxWidth={false} sx={{ m: 0, width: '100%', p: { xs: 0 } }}>
      <SummaryCardsSection />

      <TransactionTable />
    </Container>
  );
};

export default TransactionPage;
