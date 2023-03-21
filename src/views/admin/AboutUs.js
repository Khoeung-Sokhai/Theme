import React from "react";

// components

import AboutUs from "components/Cards/CardAboutUs.js";



export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        {/* <LayoutOrder /> */}
        <div className="w-full px-4">
          <AboutUs color="dark"/>
          
        </div>
       
      </div>
    </>
  );
}
