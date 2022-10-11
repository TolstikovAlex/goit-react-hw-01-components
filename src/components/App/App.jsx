import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user.json';
import { DataData } from 'components/datas/datadata';
import data from 'components/datas/data.json';
import { Path } from 'components/path/Path';
import friends from 'components/path/friends.json';
import { Moneyway } from 'components/money/Money';
import transactions from 'components/money/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
      <DataData title="Upload stats" data={data} />
      <Path friends={friends} />
      <Moneyway transactions={transactions} />
    </Container>
  );
};
