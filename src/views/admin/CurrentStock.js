import React from "react";

// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
import CardRecent from "components/Cards/CardRecent.js";
import CardCurrentQuo from "components/Cards/CardCurrentQuo.js";
import CardTradeInfo from "components/Cards/CardTradeInfo.js";

export default function CurrentStock() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardTradeInfo color="dark"/>
        </div>
        <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardCurrentQuo color="dark"/>
          
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardRecent color="dark"/>
        </div>
      </div>
    </>
  );
}
