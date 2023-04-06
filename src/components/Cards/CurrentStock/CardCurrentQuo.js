import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// components

export default function CardCurrentQuo({ color }) {
  const [getQuo, setQuo] = useState([]);

  useEffect(() => {
    async function fetchStock() {
      const URL = "http://localhost:8080/api/broker-info";
      try {
        const res = await axios.get(URL);
        console.log(res.data.data);

        setQuo(Object.values(res.data.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchStock();
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-lightBlue-900 w-full mb-6 shadow-2xl rounded-lg">
        <div className="text-white rounded-t mb-0 px-4 py-3 border-0  uppercase  border-solid border-lightBlue-700 ">
          <div className="flex flex-wrap items-center">
            <div className=" relative w-full px-4 max-w-full flex-grow flex-1">
            <table className="block w-full overflow-x-auto items-center border-collapse text-lightBlue-300 mb-3 px-6 bg-lightBlue-800  align-middle border border-solid border-lightBlue-700 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            <thead className="thead-light ">
              <tr>
                <th>Expected Price:</th>
                <td> 122</td>
                <h1>|</h1> 
                <th >Expected Price:</th>
                <td>200 </td>
              </tr>
            </thead>
          </table>
              <h3 className="font-semibold text-base text-center">
                Current Quantations <br />
                Remaining Quantity Of Orders
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Sell Remaing Quantity
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Price
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Buy Remaining Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {getQuo.slice(0, 14).map((quo) => (
                <tr key={quo.id}>
                  <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {quo.orderQty}
                  </td>
                  <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {quo.orderUV}៛
                  </td>
                  <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {quo.orderType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
