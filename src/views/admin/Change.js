import React from "react";

// components

import CardChange from "components/Cards/Order/CardChange.js";

import CardOrderRight from "components/Cards/Order/CardOrderRight.js";
import LayoutOrder from "components/Cards/Order/LayoutOrder.js";
export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        
      {/* <LayoutOrder/> */}
        <div className="w-full lg:w-6/12 px-4">
          <CardChange color="dark"/>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <CardOrderRight color="dark"/>
        </div>
      </div>
    </>
  );
}
