import { Profile } from 'components/profile/Profile';
import user from 'components/profile/user.json';
import { Statistics } from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';
import { Path } from 'components/path/Path';
import friends from 'components/path/friends.json';
import { TransactionsHistory } from 'components/transactions/TransactionsHistory';
import transactions from 'components/transactions/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <Path friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </Container>
  );
};
