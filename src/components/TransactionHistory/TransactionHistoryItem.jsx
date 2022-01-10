import PropTypes from 'prop-types';
import { TableItem } from './TransactionHistoryItem.styled.jsx';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TableItem>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableItem>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
