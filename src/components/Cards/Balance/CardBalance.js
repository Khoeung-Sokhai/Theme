import React from "react";

// components

export default function CardBalance() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-lightBlue-900 w-full mb-6 sshadow-2xl rounded-lg">
        <div className="text-white rounded-t mb-0 px-4 py-3 border-0">
          <h3>date</h3>
          <div className="flex flex-wrap items-center">
            <div className=" relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-center uppercase">
              Your balance <br />
              
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-hidden">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                ACCOUNT №
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Balance
                </th>

               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                001002
                </td>
                <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480 KHR
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
