import React from "react";
import CardHome from "components/Cards/CardHome";
// components
export default function Home() {
  return (
    <>
      <div className="flex flex-wrap">
      <CardHome color="dark"/>
      {/* <LayoutOrder /> */}
        <div className="w-full lg:w-6/12 px-4">
          
        </div>
        <div className="w-full lg:w-6/12 px-4">
          {/* <CardOrderRight color="dark"/> */}
        </div>
      </div>
    </>
  );
}
