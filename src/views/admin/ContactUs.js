import React from "react";

// components

import ContactUs from "components/Cards/CardContactUs.js";



export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        {/* <LayoutOrder /> */}
        <div className="w-full px-4">
          <ContactUs color="dark"/>
          
        </div>
       
      </div>
    </>
  );
}
