import React from "react";

// components

import CardCancel from "components/Cards/Order/CardCancel.js";

import CardOrderRight from "components/Cards/Order/CardOrderRight.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        
       
        <div className="w-full lg:w-6/12 px-4">
          <CardCancel color="dark"/>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <CardOrderRight color="dark"/>
        </div>
      </div>
    </>
  );
}
