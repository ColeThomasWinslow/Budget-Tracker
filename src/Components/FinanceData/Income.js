import React, { useState } from "react";

function Income() {
  const [Income, setIncome] = useState(Number);
  const Monthly = Math.round(Income / 12);
  return (
    <div>
      <h4 className="Question">What is your Annual Income?</h4>
      <input
        className="InputIncome"
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Yearly after taxes"
        type="number"
        min="0"
        step="500"
        defaultValue="25000"
      />
      <div className="IncomeAdd">
        <p className="Label">Yearly: ${Income}</p>
        <p className="Label">Monthly: ${Monthly}</p>
      </div>
    </div>
  );
}

export default Income;
