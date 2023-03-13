import React from "react";

// components

export default function CardTradeInfo() {
  return (
    <>
      <div className="text-white relative flex flex-col min-w-0 break-words bg-lightBlue-900 w-full mb-6 sshadow-2xl rounded-lg">
        <div className=" rounded-t mb-0 px-4 py-3 border-0">
          <h3>date</h3>
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-center uppercase">
              Price information
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-hidden">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
            </thead>
            <tbody>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Buy Remaining Quantity
                </th>
                <td className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Buy Remaining Quantity
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-center uppercase">
              PRICE INFORMATION
              </h3>
            </div>
          </div>
        </div>
        <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">

            </thead>
            <tbody>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Buy Remaining Quantity
                </th>
                <td className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Buy Remaining Quantity
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </>
  );
}
