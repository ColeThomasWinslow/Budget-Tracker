import React from "react";

function Investments() {
  return (
    <div>
      <h4 className="Question">What Investments do you Have?</h4>
      <div className="Investment">
        <input type="Checkbox" /> <p className="InvType">Real Estate</p>
      </div>
      <div className="Investment">
        <input type="Checkbox" /> <p className="InvType">Retirement account</p>
      </div>
      <div className="Investment">
        <input type="Checkbox" /> <p className="InvType">General stocks</p>
      </div>
    </div>
  );
}

export default Investments;
