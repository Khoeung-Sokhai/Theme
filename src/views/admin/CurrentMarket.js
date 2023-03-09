import React from "react";

// components

import CardCurrentMarket from "components/Cards/CardCurrentMarket.js";

export default function CurrentMarket() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        
        <div className="w-full mb-12 px-4">
          <CardCurrentMarket color="dark" />
        </div>
      </div>
    </>
  );
}
