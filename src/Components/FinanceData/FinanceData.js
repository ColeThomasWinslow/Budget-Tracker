import React from "react";
import CreditCollector from "./CreditCollector";
import Income from "./Income";
import Investments from "./Investments";
import Bills from "./Bills";
function FinanceData() {
  return (
    <div className="FinanceData">
      <div className="FDBox">
        <CreditCollector />
        <Income />
        <Investments />
      </div>
      <div className="FDBox">
        <Bills />
      </div>
    </div>
  );
}

export default FinanceData;
