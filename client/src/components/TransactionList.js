import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { Transaction } from "./Transaction";
import { UserContext } from "../Context/UserContext";
export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  const user = localStorage.getItem("user");
  const parsed = JSON.parse(user);
  useEffect(() => {
    if (parsed.email) {
      getTransactions(parsed.email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h3>Balance Sheet</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
