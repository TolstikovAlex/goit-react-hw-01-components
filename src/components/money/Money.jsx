import {
  Table,
  TableBody,
  TableColumn,
  TableData,
  TableHead,
  TableRow,
} from './Money.styled';

export const Moneyway = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableColumn>Type</TableColumn>
          <TableColumn>Amount</TableColumn>
          <TableColumn>Currency</TableColumn>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
