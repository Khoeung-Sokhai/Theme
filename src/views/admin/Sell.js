import React from "react";

// components

import CardSell from "components/Cards/Order/CardSell.js";
import CardOrderLeft from "components/Cards/Order/CardOrderLeft.js";
import CardOrderRight from "components/Cards/Order/CardOrderRight.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        
        <div className="w-full lg:w-4/12 px-4">
          <CardOrderLeft color="dark"/>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardSell color="dark"/>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardOrderRight color="dark"/>
        </div>
      </div>
    </>
  );
}
