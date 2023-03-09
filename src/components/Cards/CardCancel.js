import React from "react";

// components

export default function CardSettings({ color }) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Make Order</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Confirm
            </button>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <div style={{ marginLeft: "10px" }} className="mt-2">
              <button
                style={{ backgroundColor: "rgb(59 130 246)" }}
                class="bg-blue-500	 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-2"
              >
                <a href="/admin/Sell">Sell</a>
              </button>
              <button
                style={{ backgroundColor: "rgb(59 130 246)" }}
                class="bg-red-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-2"
              >
                <a href="/admin/Buy">Buy</a>
              </button>
              <button
                style={{ backgroundColor: "rgb(59 130 246)" }}
                class="bg-red-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-2"
              >
                <a href="/admin/Change">Change</a>
              </button>
              <button
                style={{ backgroundColor: "red" }}
                class="bg-red-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-2"
              >
                <a href="/admin/Cancel">Cancel</a>
              </button>
            </div>

            
            {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}

            <div
              className={
                "mt-8 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
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
                      List Order
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
                         
                         <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-800 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
            
          </form>
        </div>
        
      </div>
    </>
  );
}
