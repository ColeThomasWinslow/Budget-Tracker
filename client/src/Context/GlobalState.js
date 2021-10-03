import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [],
  user: {},
  error: null,
  loading: true,
};

// Creating Context
export const GlobalContext = createContext(initialState);

// Create Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions Transactions
  async function getTransactions(email) {
    try {
      const res = await axios.get("/api/v1/transactions");
      const UserTransaction = res.data.data.filter((value) => {
        if (value.owner.toLowerCase().includes(email.toLowerCase())) {
          return value;
        }
      });
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: UserTransaction,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
      });
    }
  }
  async function deleteTransaction(id) {
    try {
      await axios.delete(`api/v1/transactions/${id}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }
  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  //*//
  // Actions Users
  async function addNewUser(user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/v1/users", user, config);
      dispatch({
        type: "ADD_USER",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addNewUser,
        deleteTransaction,
        addTransaction,
        getTransactions,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
