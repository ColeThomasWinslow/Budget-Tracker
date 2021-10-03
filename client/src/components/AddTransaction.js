import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { UserContext } from "../Context/UserContext";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const { user } = useContext(UserContext);
  const userStore = localStorage.getItem("user");
  const parsed = JSON.parse(userStore);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const addNewTransaction = (e) => {
    if (user) {
      e.preventDefault();
      const newTransaction = {
        owner: parsed.email,
        id: Math.floor(Math.random() * 1000000000),
        text: text,
        amount: +amount,
      };
      // function from Context giving the payload
      addTransaction(newTransaction);
    }
  };
  return (
    <div>
      {user && <h3>Add new transaction {user.name}</h3>}
      <form onSubmit={addNewTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
