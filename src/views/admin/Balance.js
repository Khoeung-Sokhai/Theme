import React from "react";

// components

import CardDeposit from "components/Cards/CardDeposit";
import CardWithDraw from "components/Cards/CardWithDraw";
export default function Balance() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardDeposit color="dark" />
        </div>
        <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardWithDraw color="dark" />
        </div>
      </div>
    </>
  );
}