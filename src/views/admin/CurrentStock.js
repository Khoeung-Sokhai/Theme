import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart";
import CardBarChart from "components/CardBarChart";
import CardRecent from "components/Cards/CurrentStock/CardRecent";
import CardCurrentQuo from "components/Cards/CurrentStock/CardCurrentQuo";
import CardTradeInfo from "components/Cards/CurrentStock/CardTradeInfo";
import CardHistoryPrice from "components/Cards/CurrentStock/CardHistoryPrice";
import CardMix from 'components/Cards/CardMix';

export default function CurrentStock() {
  return (
   
      <><div className="flex flex-wrap">
      <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
        {/* <CardLineChart/> */}
        {/* <CardRecent /> */}
        <CardTradeInfo />
      </div>
      <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
        {/* <CardBarChart /> */}
        <CardCurrentQuo />
      </div>
    </div><div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <CardRecent />
          <CardHistoryPrice/>
          <CardLineChart/>
          <CardBarChart/>
          <CardMix/>
        </div>
        <div className="w-full xl:w-4/12 px-4">
        </div>
      </div></>
      
    
  );
}
