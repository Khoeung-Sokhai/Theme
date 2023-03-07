import React from "react";

// components

import CardCurrentStock from "components/Cards/CardCurrentStock.js";

export default function CurrentMarket() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardCurrentStock />
        </div>
        <div className="w-full mb-12 px-4">
          <CardCurrentStock color="dark" />
        </div>
      </div>
    </>
  );
}
