import { Profile } from 'components/profile/Profile';
import user from 'components/profile/user.json';
import { Statistics } from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';
import { Abcd } from 'components/friendList/Tyhnnjb';
import friends from 'components/friendList/friends.json';
import { TransactionsHistory } from 'components/transactions/TransactionsHistory';
import transactions from 'components/transactions/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <Abcd friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </Container>
  );
};
