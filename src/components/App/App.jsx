import { Profile } from 'components/Profile/Profile';
import user from '../Profile/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../Statistics/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';
import transactions from '../../components/Transactions/transactions.json';
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
