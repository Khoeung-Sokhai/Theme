import React from "react";

// components

export default function CardTradeInfo() {
  return (
    <>
      <div className="text-white relative flex flex-col min-w-0 break-words bg-lightBlue-900 w-full mb-6 shadow-lg rounded">
        <div className=" rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-center uppercase">
              Price information
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
            </thead>
            <tbody>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Current Price
                </th>
                <td className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                P/E Ratio
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Base Price/IPO Price
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Upper Price
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Lower Price
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Opening Price
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                High Price
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Low Price
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="block w-full overflow-x-auto">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-center uppercase">
              Trade INFORMATION
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
                Time
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Trade Price
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Change
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                %Change
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Acc. Volume
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Acc. Value(KHR)
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Market Cap. (Mil. KHR)<sup>(1)</sup>
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
              <tr>
                <th className=" text-lightBlue-300 border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                Full Market Cap. (M.KHR)<sup>(2)</sup>
                </th>
                <td className="text-center border-t-0 px-6 align-middle  border border-solid border-lightBlue-700 py-3 border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  1,480
                </td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
    </>
  );
}
