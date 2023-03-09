import React from "react";

// components

export default function CardCurrentQuo() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-2xl rounded-lg">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <h3>date</h3>
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-center"style={{ textDecoration:'underline double', textTransform:'uppercase'}}>
              Current Quantations <br />
              Remaining Quantity Of Orders
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-hidden">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Sell Remaing Quantity
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Price 
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Buy Remaining Quantity
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left border-t-0 px-6 align-middle border-l-0  border border-solid border-blueGray-500 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                Buy Remaining Quantity
                </td>
                <td className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-blueGray-500 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
                <td className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-blueGray-500 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  <span className="mr-2">60%</span>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
