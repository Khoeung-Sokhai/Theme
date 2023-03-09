import React from "react";
import PropTypes from "prop-types";
// import {useState,useEffect} from "react";
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color }) {
  // const [getStocks, setStocks] = useState([]);

  // useEffect(() => {
  //   async function fetchStock() {
  //     const URL = 'http://localhost:8080/api/broker-info';
  //     try {
  //       const res = await axios.get(URL);
  //       console.log(res.data.data);

  //       setStocks(Object.values(res.data.data));
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
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
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
                <th rowSpan="2"
                  className={
                    "  px-6 align-middle border border-solid py-3 text-base  border-l-0 border-r-0 whitespace-nowrap font-semibold  text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Max Price
                </th>
                <th rowSpan="2"
                  className={
                    "  px-6 align-middle border border-solid py-3 text-base  border-l-0 border-r-0 whitespace-nowrap font-semibold  text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Base Price
                </th>
                <th  
                  className={
                    "px-6 align-middle border border-solid py-3 text-base  border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
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
             
     
              <tr>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center">
                 10000
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center">
                 9000
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center">
                 8000
                </td>
                
                              
              </tr>
     
             
             
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
