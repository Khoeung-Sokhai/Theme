import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import axios from "axios";
// components


export default function CardListTrade({ color }) {
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
    <>
       <div
              className={
                "mt-8 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
              }
            >
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center ">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-center uppercase">
                    <h3
                      className={
                        "font-semibold text-lg " +
                        (color === "light" ? "text-blueGray-700" : "text-white")
                      }
                    >
                      Main Board
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
                          "  px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                          (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                      >
                        Issue No
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                          (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                        }
                      >
                        Issue Name
                      </th>
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
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
                  {getStocks.sort((a, b) => a.orderQty - b.orderQty).slice(0,5).map((stock) =>
                    <tr key={stock.id}>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                      {stock.issueCode}
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                      {stock.issueSymbol}
                      </td>
        
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                      {stock.orderQty}
                      </td> 
                    </tr>)}
                    
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
