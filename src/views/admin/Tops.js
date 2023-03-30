import React from "react";

// components

import CardTopSell from "components/Cards/Tops/CardTopSell.js";
import CardTopBuy from "components/Cards/Tops/CardTopBuy.js";

export default function Tops() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTop />
        </div> */}
        <div className="w-full lg:w-6/12 mb-12 px-4">
          <CardTopSell color="dark" />
        </div>
        <div className="w-full lg:w-6/12 mb-12 px-4">
          <CardTopBuy color="dark" />
        </div>
      </div>
    </>
  );
}
