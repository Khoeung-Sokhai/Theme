import React, { useState } from "react";
// components
import axios from "axios";

export default function CardSettings({ color }) {
  const [price, setQty] = useState("");
  function GetbrokerAPI(e) {
    e.preventDefault();
    var data = JSON.stringify({
      id: "13",
      buy: "001003",
      price: price,
     
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/buy-order",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleChange = (event) => {
    setQty(event.target.value);
  };
  return (
    <>
      <form onSubmit={GetbrokerAPI}>
        <div className="bg-lightBlue-800 text-white border-lightBlue-700 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className=" text-xl font-bold">Make Order</h6>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Order
              </button>
            </div>
          </div>

          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {/* <div style={{ paddingLeft:'90px', marginLeft: "auto",marginRight:"auto"}} className="mt-2">
          <button style={{backgroundColor: "rgb(59 130 246)", width:"108px"} } class="bg-blue-500	 hover:bg-sky-700 text-white font-bold py-2  rounded-2">
          <a href="/admin/Sell">
              Sell
            </a>
         </button>
           <button style={{backgroundColor: "Red", width:"108px"}} class="bg-red-300 hover:bg-sky-700 text-white font-bold py-2  rounded-2">
           <a href="/admin/Buy">
              Buy
            </a>
        </button>
          <button style={{backgroundColor: "rgb(59 130 246)", width:"108px"}} class="bg-red-300 hover:bg-sky-700 text-white font-bold py-2 rounded-2">
          <a href="/admin/Change">
              Change
            </a>
         </button>
           <button style={{backgroundColor: "rgb(59 130 246)", width:"108px"}} class="bg-red-300 hover:bg-sky-700 text-white font-bold py-2  rounded-2">
           <a href="/admin/Cancel">
              Cancel
            </a>
        </button>
        </div> */}

            <div className="flex flex-wrap mt-8">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Issue No
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Issue Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Quality
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Lucky"
                    onChange={handleChange}
                    value={price}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                </div>
              </div>
            </div>
            <select
              style={{
                marginLeft: "25px",
                borderRadius: "5px",
                backgroundColor: "wheat",
              }}
              className="uppercase text-black"
            >
              <option value="001">Broker A</option>
              <option value="002">Broker B</option>
              <option value="003">Broker C</option>
            </select>
            <select
              style={{
                marginLeft: "200px",
                borderRadius: "5px",
                backgroundColor: "wheat",
              }}
              className="uppercase text-black"
            >
              <option value="1">Sell</option>
              <option value="2">Buy</option>
            </select>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
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
                      Remain Data
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
                        100
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                        100
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                        200
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                        100
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                        100
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                        200
                      </td>
                    </tr>
                    <tr>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                        100
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                        100
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                        200
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
