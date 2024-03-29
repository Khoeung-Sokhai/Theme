import React from "react";
import Clock from 'react-live-clock';
// components

// import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          
          <div>
            {/* Card stats */}
            <div style={{marginLeft:"auto",marginRight:"auto", marginTop: "-40px" }} className="text-center  text-white text-xl  w-3 ">
                <p>Data: <Clock format={'DD-MM-YYYY'} ticking={true} timezone={'Bangkok/Pacific'} /></p>
                <p>Time: <Clock format={'hh:mm:ss A'} ticking={true} timezone={'Bangkok/Pacific'} /></p>
            </div>
            <hr style={{width:"250px", marginLeft:"auto",marginRight:"auto"}} className="  mt-4 border-b-1 border-blueGray-300" />
            {/* <div className="flex flex-wrap mt-4">
            
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Balance"
                  statTitle="5,000,000"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-credit-card"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="BUYes"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
