import React from "react";

function CreditScore() {
  return (
    <div>
      <div className="Box">
        <h3 className="Title">Your Credit Score</h3>
        <div className="ScoreBox">
          <h2 className="Score">800</h2>
          <p className="CreditStatus">Excellent Credit</p>
        </div>
        <div className="IncomeBox">
          <h4 className="Income">Income</h4>
          <div className="Statement">
            <p className="Label">Yearly:</p>
            <p className="Salary">$65,000</p>
          </div>
          <div className="Statement">
            <p className="Label">Monthly:</p> <p className="Salary">$5,416</p>
          </div>
          <h4 className="Income">Monthly Allocation</h4>
          <div className="Statement">
            <p className="Label"> Monthly Bills:</p>
            <p className="Bills">$500</p>
          </div>
          <div className="Statement">
            <p className="Label"> Savings Goal:</p>
            <p className="Savings">$1000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditScore;
