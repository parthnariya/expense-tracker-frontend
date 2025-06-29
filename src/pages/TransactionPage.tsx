import { Container } from '@mui/material';

import SummaryCardsSection from '@/components/transactionpage/SummaryCardsSection';
import TransactionSection from '@/components/transactionpage/TransactionSection';

const TransactionPage = () => {
  return (
    <Container maxWidth={false} sx={{ m: 0, width: '100%', p: { xs: 0 } }}>
      <SummaryCardsSection />

      <TransactionSection />
    </Container>
  );
};

export default TransactionPage;
