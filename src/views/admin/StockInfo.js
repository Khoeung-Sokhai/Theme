import React from "react";


// components


// components

import CardCompany from "components/Cards/StockInfo/CardCompany.js";
import CardWeekData from "components/Cards/StockInfo/CardWeekData.js";
import CardIPO from "components/Cards/StockInfo/CardIPO.js";
import CardPerformance from "components/Cards/StockInfo/CardPerformance.js";
import CardStatistic from "components/Cards/StockInfo/CardStatistic.js";
import CardValuation from "components/Cards/StockInfo/CardValuation.js";


export default function CurrentMarket() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
      <div className=" w-full lg:w-6/12 px-4">
          <CardWeekData  color="dark" />
        </div>

        <div className="w-full lg:w-6/12 px-4">
          <CardPerformance color="dark" />
        </div> 
        <div className="w-full lg:w-6/12 px-4">
          <CardValuation color="dark" />
        </div>
        <div  className="w-full lg:w-6/12 px-4">
          <CardCompany color="dark" />
        </div>
        {/* <div  className="w-full  px-4">
          <CardIPO color="dark" />
        </div> */}

        <div className="w-full lg:w-10/12 px-4  ">
          
          <CardStatistic color="dark"/>
        </div> 
         
        
      
      
    
      </div>
    </>
  );
}
