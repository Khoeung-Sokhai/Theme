import React, {useEffect, useState } from "react";
import axios from "axios";
// components

export default function CardRecent() {
  const [getStocks, setStocks] = useState([]);

  useEffect(() => {
    async function fetchStock() {
      const URL = 'http://localhost:8080/api/broker-info';
      try {
        const res = await axios.get(URL);
        console.log(res.data.data);

        setStocks(Object.values(res.data.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchStock();
  }, []);
  return (

      <div className="text-white relative flex flex-col min-w-0 break-words bg-lightBlue-900 w-full mb-6 shadow-2xl rounded-lg">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-center uppercase">
                Recent Trade 
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Time
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Execution Price
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Change
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                %Change
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Trading Volume
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                Trading Value (KHR)
                </th>
              </tr>
            </thead>
            <tbody>
            {getStocks.map((stock) => 
            <tr key={stock.id}>
                <th  className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-blueGray-500 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                {stock.id}
                </th>
                <td className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-blueGray-500 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                {stock.sell}
                </td>
                <td className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-blueGray-500 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                {stock.price}៛
                </td>
                <td className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-blueGray-500 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                {stock.buy}
                </td>
                <td className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-blueGray-500 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  340
                </td>
                <td className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-blueGray-500 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  46,53%
                </td>
              </tr>)}

            </tbody>
          </table>
        </div>
      </div>
  );
}
