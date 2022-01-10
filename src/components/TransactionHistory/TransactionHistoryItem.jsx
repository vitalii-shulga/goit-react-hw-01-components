import PropTypes from 'prop-types';
import { TableItem, BodyCell } from './TransactionHistoryItem.styled.jsx';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TableItem>
      <BodyCell>{type}</BodyCell>
      <BodyCell>{amount}</BodyCell>
      <BodyCell>{currency}</BodyCell>
    </TableItem>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
