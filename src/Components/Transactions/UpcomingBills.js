import React from "react";

function UpcomingBills() {
  return (
    <div>
      <div className="Box Upcoming">
        <h3 className="Title">Upcoming Bills</h3>
        <div className="Statement">
          <p className="Label">UTILITIES</p> <p className="Negative">$25.75</p>
        </div>
        <div className="Statement">
          <p className="Label">MORTGAGE</p> <p className="Negative">$25.75</p>
        </div>
      </div>
    </div>
  );
}

export default UpcomingBills;
