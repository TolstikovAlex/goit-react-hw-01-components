import {
  Table,
  TableBody,
  TableColumn,
  TableData,
  TableHead,
  TableRow,
} from './TrensactionsHistory.styled';

export const TransactionHistory = ({ transactions }) => {
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
