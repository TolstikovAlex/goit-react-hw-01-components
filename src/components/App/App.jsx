import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';
import { Path } from 'components/path/Path';
import friends from 'components/path/friends.json';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';
import transactions from 'components/Transactions/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <Path friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
