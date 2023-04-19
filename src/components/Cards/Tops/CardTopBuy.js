import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
// components


export default function CardTop({ color }) {

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
  
  const [getStock, setStock] = useState([]);
  useEffect(() => {
    async function fetchStock() {
      const URL = 'http://localhost:8080/api/issue-info';
      try {
        const res = await axios.get(URL);
        console.log(res.data.data);

        setStock(Object.values(res.data.data));
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
                Top Buy
              </h3>
             
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
                    "px-6 align-middle text-xs border border-solid py-3 text-center uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }

                >
                 Stock
                </th>
                <th  
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Price
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Quality
                </th>
               
               
              </tr>
              
            </thead>
            <tbody>
            {getStocks.map((stock,index) => 
              <tr key = {stock.id}>
                 {(() => {
                      if (stock.orderType == 2) {
                        return (
                          <>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs  whitespace-nowrap p-4">
                              {stock.issueSymbol}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs  whitespace-nowrap p-4">
                              {stock.orderQty}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs  whitespace-nowrap p-4">
                              {stock.orderUV}
                            </td>
                          </>
                        );
                      }
                    })()} 
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTop.defaultProps = {
  color: "light",
};

CardTop.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
