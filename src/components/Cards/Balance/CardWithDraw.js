import React, { useState } from "react";
import PropTypes from "prop-types";

// components
export default function CardWithDraw({ color }) {
    const [withdraw, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Your withdraw was: ${withdraw}`);} 
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
              >
                WithDraw
              </h3>
              <form onSubmit={handleSubmit}>
      <label>
        <input 
          type="number" style={{backgroundColor:"lightBlue",color:"black",width:"200px",height:"30px",borderRadius:"5px"}}
          value={withdraw}
          onChange={(e) => setName(e.target.value)}
        />
      </label> &nbsp;
      <input type="submit" style={{backgroundColor:"green",borderRadius:"5px"}} value="Withdraw"/>
    </form>
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
                 date
                </th>
                <th  
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                Account №
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  withdrew
                </th>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs  whitespace-nowrap p-4">
                 10/03/23
                </td>
                
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  111 222 333
                </td>
                <td className=" border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" style={{color:"rgb(255, 0, 0)"}}>
                  2,500 KHR
                   <i className="fas fa-arrow-down mr-2"></i> 
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardWithDraw.defaultProps = {
  color: "light",
};

CardWithDraw.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
