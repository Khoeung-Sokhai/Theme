import React from "react";


// components


// components

import CardCompany from "components/Cards/CardCompany.js";
import CardWeekData from "components/Cards/CardWeekData.js";
import CardIPO from "components/Cards/CardIPO.js";
import CardPerformance from "components/Cards/CardPerformance.js";
import CardStatistic from "components/Cards/CardStatistic.js";
import CardValuation from "components/Cards/CardValuation.js";


export default function CurrentMarket() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div style={{marginLeft:"auto", marginRight: "auto"}} className="w-full  px-4">
          <CardWeekData  color="dark" />
        </div>
        <div className="w-full lg:w-10/12 px-4  ">
          <CardStatistic color="dark"/>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <CardIPO color="dark" />
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <CardValuation color="dark" />
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <CardCompany color="dark" />
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <CardPerformance color="dark" />
        </div>
    
      </div>
    </>
  );
}
