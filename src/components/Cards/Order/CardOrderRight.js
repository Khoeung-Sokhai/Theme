import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { get } from "https";

// components

export default function CardTable({ color }) {
  const [getStocks, setStocks] = useState([]);
  var ytd = new Date();

  ytd.setDate(ytd.getDate() - 1);

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
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 uppercase text-center">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
                style={{color:"#ff8c00"}}
              >
                Base Price
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto mt-6">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  rowSpan="2"
                  className={
                    "  px-6 align-middle border border-solid py-3 text-base  border-l-0 border-r-0 whitespace-nowrap font-semibold uppercase text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Max Price
                </th>
                <th
                  rowSpan="2"
                  className={
                    "  px-6 align-middle border border-solid py-3 text-base  border-l-0 border-r-0 whitespace-nowrap font-semibold uppercase text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Base Price
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-base  border-l-0 border-r-0 whitespace-nowrap font-semibold uppercase text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Min Price
                </th>
              </tr>
            </thead>
            <tbody>
              {getStocks
                .sort((a, b) => b.orderNo - a.orderNo)
                .slice(1,2)
                .map((stock) => (
                  <tr key={stock.id}>
                    
                    {(() => {
                      if (stock.orderDt == ytd.toISOString().substring(0, 10)) {
                        return (
                          <>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center">
                              {stock.orderUV - -0.1 * stock.orderUV}
                            </td>

                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center">
                              {stock.orderUV}
                            </td>

                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center">
                              {stock.orderUV - 0.1 * stock.orderUV}
                            </td>
                          </>
                        );
                      }
                    })()}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-center uppercase">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
                style={{color:"#ff8c00"}}
              >
                Show Data
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center text-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {/* <th
                  rowSpan="2"
                  className={
                    "text-left  px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  ID
                </th> */}
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  sell
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Price
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Buy
                </th>
              </tr>
            </thead>
            <tbody>
              {getStocks
                .sort((a, b) => b.orderUV - a.orderUV)
                .slice(0, 5)
                .map((stock) => (
                  <tr key={stock.id}>
                    {(() => {
                      if (stock.orderType == 1) {
                        return (
                          <>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {stock.orderQty}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {stock.orderUV}
                            </td>
                          </>
                        );
                      }
                    })()}
                  </tr>
                ))}

              {getStocks
                .sort((a, b) => b.orderUV - a.orderUV)
                .slice(0, 10)
                .map((stock) => (
                  <tr key={stock.id}>
                    {(() => {
                      if (stock.orderType == 2) {
                        return (
                          <>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {stock.orderUV}
                            </td>

                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                              {stock.orderQty}
                            </td>
                          </>
                        );
                      }
                    })()}
                  </tr>
                ))}

              {/* {getStocks.slice(5, 10).map((stock, index) => (
                <tr key={stock.id}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex items-center text-center">
                    {index + 6}.
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {stock.orderQty}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {stock.orderUV}
                </td>
               
                              
              </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
