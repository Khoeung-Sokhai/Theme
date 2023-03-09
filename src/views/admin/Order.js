import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardOrderLeft from "components/Cards/CardOrderLeft.js";
import CardCancel from "components/Cards/CardCancel.js";

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
