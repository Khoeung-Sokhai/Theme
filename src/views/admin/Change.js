import React from "react";

// components

import CardChange from "components/Cards/CardChange.js";
import CardOrderLeft from "components/Cards/CardOrderLeft.js";
import CardOrderRight from "components/Cards/CardOrderRight.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        
        <div className="w-full lg:w-4/12 px-4">
          <CardOrderLeft />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardChange />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardOrderRight />
        </div>
      </div>
    </>
  );
}
