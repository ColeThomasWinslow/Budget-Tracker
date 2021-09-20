import React from "react";
import LatestTransactions from "./LatestTransactions";
import UpcomingBills from "./UpcomingBills";
function TransactionComp() {
  return (
    <div>
      <LatestTransactions />
      <UpcomingBills />
    </div>
  );
}

export default TransactionComp;
