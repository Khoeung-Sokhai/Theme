import React from "react";

// components

import CardDeposit from "components/Cards/Balance/CardDeposit";
import CardWithDraw from "components/Cards/Balance/CardWithDraw";
import CardBalance from "components/Cards/Balance/CardBalance";
export default function Balance() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
          <CardBalance color="dark" />
        <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
        </div>
      </div>
    </>
  );
}