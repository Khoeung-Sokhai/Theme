import React from "react";

// components

import CardTop from "components/Cards/CardTop.js";

export default function Tops() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTop />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTop color="dark" />
        </div>
      </div>
    </>
  );
}
