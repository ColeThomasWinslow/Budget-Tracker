import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transaction } from "./Transaction";
export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div>
      <h3>Balance Sheet</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
