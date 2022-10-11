import {
  Table,
  TableBody,
  TableColumn,
  TableData,
  TableHead,
  TableRow,
} from './TransactionHistory.styled';

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

TransactionHistory.propType = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
