import React from "react";
import PropTypes from "prop-types";

// components


export default function CardListTrade({ color }) {
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
                        "font-semibold text-lg text-center " +
                        (color === "light" ? "text-blueGray-700" : "text-white")
                      }
                    >
                      List Trade
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
                        Quality
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                         
                        
                              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">100</label>

                              
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                        100
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                        200
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {/* <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /> */}
                              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">100</label>
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                        100
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                        200
                      </td>
                    </tr>

                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {/* <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /> */}
                              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">100</label>
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                        100
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                        200
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {/* <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /> */}
                              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">100</label>
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                        100
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                        200
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                      {/* <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /> */}
                              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800">100</label>
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                        100
                      </td>
                      <td className="text-sm font-medium text-gray-900 dark:text-gray-800 text-center">
                        200
                      </td>
                    </tr>
                    
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
