import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import CreditScore from "./Components/CreditScore/CreditScore";
import Budget from "./Components/MonthlyBudget/Budget";
import TransactionComp from "./Components/Transactions/TransactionComp";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="Home">
          <Route path="/Home" component={CreditScore} />
          <Route path="/Home" component={Budget} />
          <Route path="/Home" component={TransactionComp} />
        </div>
      </Router>
    </div>
  );
}

export default App;
