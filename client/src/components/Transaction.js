import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { CommaGen } from "../utils/CommaGen";
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        x
      </button>
      {transaction.text}
      <span>
        {sign}${CommaGen(Math.abs(transaction.amount))}
      </span>
    </li>
  );
};
