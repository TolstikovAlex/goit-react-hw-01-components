import { Profile } from '../profile/Profile';
import user from 'components/profile/user.json';
import { Statistics } from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';
import transactions from 'components/Transactions/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
