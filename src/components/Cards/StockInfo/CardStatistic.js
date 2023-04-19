import React from "react";
import PropTypes from "prop-types";

// components


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
    <hr className=" border-b-1 border-blueGray-300" />
      <div
        className={
          "mt-4 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 uppercase">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
                style={{color:"#ff8c00"}}
              >
                Annual Trading Statistics
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
                    "text-orange-500 px-6 align-middle text-xs border border-solid py-3 text-center uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Year: 
                </th>
                <td  
                  className={
                    "px-6 align-middle text-xs border border-solid py-3 text-center uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 Market cap 
                </td>
                <th  
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 full market cap
                </th>
                <th  
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 last price
                </th>
                <th  
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 % change
                </th>
                <th  
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 average price
                </th>
                <th  
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 high
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  low
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                 value/day
                </th>
                           
              </tr>
              
            </thead>
            <tbody>
              <tr>
                <td className="text-orange-500 border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs  whitespace-nowrap p-4">
                2020
                </td>
                <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs  whitespace-nowrap p-4">
                 12
                </td>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs whitespace-nowrap p-4">
                  123
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  123
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  213
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  12
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  131
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  1312
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  13
                </td>
              
              </tr>
              <tr>
                <td className="text-orange-500 border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs  whitespace-nowrap p-4">
                2021
                </td>
                <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs  whitespace-nowrap p-4">
                 121
                </td>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  123
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  123
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  321
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  2113
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  13
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  13
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  122
                </td>
               
              </tr>
              <tr>
                <td  className=" text-orange-500 border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs  whitespace-nowrap p-4">
                2022
                </td>
                <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs  whitespace-nowrap p-4">
                 112
                </td>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                 133
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  123
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  133
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  133
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  123
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  321
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs text-center whitespace-nowrap p-4">
                  432
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
