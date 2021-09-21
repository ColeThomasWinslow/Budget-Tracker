import React from "react";

function Bills() {
  return (
    <div>
      <h4 className="Question">What are your reacquiring monthly bills?</h4>
      <p className="Label">Utilities</p>
      <p className="Label">Rent</p>
      <p className="Label">Insurance</p>
      <button className="AddBtn Custom">Add Custom Bill</button>
    </div>
  );
}

export default Bills;
