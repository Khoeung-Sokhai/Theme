import React from "react";

// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
import CardRecent from "components/Cards/CardRecent.js";
import CardCurrentQuo from "components/Cards/CardCurrentQuo.js";
import CardTradeIfno from "components/Cards/CardTradeInfo.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart/> */}
          {/* <CardRecent /> */}
          <CardTradeIfno />
        </div>
        <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
          {/* <CardBarChart /> */}
          <CardCurrentQuo />
          
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardRecent />
        </div>
         <div className="w-full xl:w-4/12 px-4">
          {/* <CardSocialTraffic /> */}
        </div>
        {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardRecent />
        </div> */}
      </div>
    </>
  );
}
