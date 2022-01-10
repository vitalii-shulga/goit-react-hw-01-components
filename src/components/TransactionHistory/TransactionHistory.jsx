import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import { Table, Head, HeadCell } from './TransactionHistory.styled.jsx';

export const TransactionHistory = ({ items }) => {
  return (
    <Table class="transaction-history">
      <thead>
        <Head>
          <HeadCell>Type</HeadCell>
          <HeadCell>Amount</HeadCell>
          <HeadCell>Currency</HeadCell>
        </Head>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
