import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// components
export default function CardListTrade({ color }) {
  const [getStocks, setStocks] = useState([]);
  useEffect(() => {
    async function fetchStock() {
      const URL = "http://localhost:8080/api/broker-info";
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

  // const [getStock, setStock] = useState([]);

  // useEffect(() => {
  //   async function fetchStock() {
  //     const URL = "http://localhost:8080/api/broker-info";
  //     try {
  //       const res = await axios.get(URL);
  //       console.log(res.data.data);

  //       setStock(Object.values(res.data.data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchStock();
  // }, []);
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 uppercase">
              <h3
                className={
                  "font-semibold text-lg text-left " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
                style={{color:"#ff8c00"}}
              >
                List Order
              </h3>
            </div>
            <div style={{ width: "190px" }} className="px-4">
              <div className="relative w-full ">
                <select
                  className=" text-center uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-xs shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  // value={brokerId}
                  // onChange={(e) => setBrokerId(e.target.value)}
                  // value={brokerId}
                >
                  <option value="" disabled selected hidden>
                    Choose Stock
                  </option>
                  {getStocks.map((stock) => (
                    <option key={stock.id} label={stock.issueSymbol}>
                      {" "}
                      {stock.issueNo}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "  px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  IssueNo
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  IssueName
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {getStocks.slice(0,8).map((stock) => (
                <tr key={stock.id}>
                  <td className=" py-3 border-l-0 border-t-0 text-sm font-medium text-gray-900 border border-solid border-lightBlue-700 dark:text-gray-800 text-center">
                    {stock.issueCode}
                  </td>
                  <td className="py-3 border-l-0 border-l-0 border-t-0 border border-solid border-lightBlue-700 text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                    {stock.issueSymbol}
                  </td>
                  <td className="py-3 border-l-0 border-l-0 border-t-0  border border-solid border-lightBlue-700 text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                    {stock.orderQty}
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

CardListTrade.defaultProps = {
  color: "light",
};

CardListTrade.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
