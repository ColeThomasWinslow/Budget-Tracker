import React from "react";

function Bills() {
  return (
    <div>
      <div>
        <h4 className="Question">What are your reacquiring monthly bills?</h4>
        <p className="Label">Utilities</p>
        <input type="number" />
        <p className="Label">Rent</p>
        <input type="number" />
        <p className="Label">Insurance</p>
        <input type="number" />
      </div>
      <button className="AddBtn Custom">Add Custom Bill</button>
    </div>
  );
}

export default Bills;
