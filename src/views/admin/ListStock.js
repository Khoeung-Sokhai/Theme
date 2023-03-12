import React from "react";

// components

import CardListOrder from "components/Cards/ListStock/CardListOrder";
import CardListTrade from "components/Cards/ListStock/CardListTrade";
export default function Balance() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardListOrder color="dark" />
        </div>
        <div className="xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardListTrade color="dark" />
        </div>
      </div>
    </>
  );
}