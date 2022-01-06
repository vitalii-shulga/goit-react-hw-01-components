import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr class="item">
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
