import React from "react";

// components


import CardOrderLeft from "components/Cards/Order/CardOrderLeft.js";
import CardCancel from "components/Cards/Order/CardCancel.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        
        <div className="w-full lg:w-4/12 px-4">
          <CardOrderLeft />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardCancel />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardOrderRight />
        </div>
      </div>
    </>
  );
}
