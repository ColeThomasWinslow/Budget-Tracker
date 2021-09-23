import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import CreditScore from "./Components/CreditScore/CreditScore";
import Budget from "./Components/MonthlyBudget/Budget";
import TransactionComp from "./Components/Transactions/TransactionComp";
import LinkBanking from "./Components/Banking/LinkBanking";
import FinanceData from "./Components/FinanceData/FinanceData";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="Home">
          <Route exact path="/" component={LandingPage} />
          <Route path="/Home" component={CreditScore} />
          <Route path="/Home" component={Budget} />
          <Route path="/Home" component={TransactionComp} />
          <Route path="/Banking" component={LinkBanking} />
          <Route path="/Finance" component={FinanceData} />
        </div>
      </Router>
    </div>
  );
}

export default App;
