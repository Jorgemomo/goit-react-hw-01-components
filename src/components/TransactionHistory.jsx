import PropTypes from "prop-types";

import { Table, TrTableHead, TrTableItem } from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TrTableHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TrTableHead>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TrTableItem key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TrTableItem>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
