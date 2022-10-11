import { Blabla } from 'components/bla/Blabla';
import user from 'components/bla/user.json';
import { DataData } from 'components/datas/datadata';
import data from 'components/datas/data.json';
import { Path } from 'components/path/Path';
import friends from 'components/path/friends.json';
import { TransactionsHistory } from 'components/transactions/TransactionsHistory';
import transactions from 'components/transactions/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Blabla user={user} />
      <DataData title="Upload stats" data={data} />
      <Path friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </Container>
  );
};
