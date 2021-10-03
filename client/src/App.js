import "./App.css";
import React, { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { UserContext } from "./Context/UserContext";
function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <GlobalProvider>
      <UserContext.Provider value={value}>
        <Router>
          <Header />
          <Route exact path="/">
            <Login />
            <SignUp />
          </Route>
          <Route exact path="/tracker">
            <div className="container">
              <Balance />
              <IncomeExpenses />
              <TransactionList />
              <AddTransaction />
            </div>
          </Route>
        </Router>
      </UserContext.Provider>
    </GlobalProvider>
  );
}

export default App;
