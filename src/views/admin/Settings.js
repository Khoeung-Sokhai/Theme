import React from "react";

// components

import CardCancel from "components/Cards/Order/CardCancel.js";
import CardOrderLeft from "components/Cards/Order/CardOrderLeft.js";

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardOrderLeft />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardOrderLeft />
        </div>
      </div>
    </>
  );
}
