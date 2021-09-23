import React, { useState } from "react";

function CreditCollector() {
  const [Credit, setCredit] = useState(Number);
  return (
    <div>
      <h4 className="Question">What is your Credit Score?</h4>
      <h2 className="Score">{Credit}</h2>

      {Credit >= 600 && <p className="CreditStatus">Great Credit</p>}
      {Credit <= 600 && (
        <p className="CreditStatus Poor">Below Average Credit</p>
      )}
      <input
        className="CreditRange"
        type="range"
        min="0"
        max="800"
        onChange={(e) => setCredit(e.target.value)}
      />
    </div>
  );
}

export default CreditCollector;
