import React from "react";

// components

import ListCompany from "components/Cards/CardListCompany.js";



export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        {/* <LayoutOrder /> */}
        <div className="w-full px-4">
          <ListCompany color="dark"/>
          
        </div>
       
      </div>
    </>
  );
}
