import React from "react";
import PropTypes from "prop-types";
export default function AboutUs({ color }) {

  return (
    <>
      <div
        className={
          " relative flex flex-col min-w-0 break-words  mb-6 shadow-lg rounded mt-12 " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <h2 className="text-center text-3xl ">About Us</h2>

        <div className="flex flex-wrap mt-6 ">
          
          <div
            className="w-full lg:w-4/12 px-4 ml-2 "
            style={{ marginLeft: "50px" }}
          >
             <p>Welcome...😙</p>  
            <hr className="mt-2 border-b-1 border-blueGray-300" /> 
            <div className="relative w-full mb-3 mt-6">
              
              <img
                style={{ height: "200px" }}
                alt="..."
                src={
                  "https://thumbs.dreamstime.com/b/double-exposure-businessman-stock-market-chart-business-concept-52414625.jpg"
                }
                className="  shadow-xl rounded  align-middle border-none "
              />
            </div>
            <div className="relative w-full mb-3 flex flex-wrap">
                  <img
                    style={{ height: "100px",width:"150px" }}
                    alt="..."
                    src={
                      "https://thumbs.dreamstime.com/b/hand-coin-tree-tree-grows-pile-saving-money-future-investment-ideas-business-growth-green-background-111124211.jpg"
                    }
                    className="  shadow-xl rounded  align-middle border-none "
                  />
                  <img
                    style={{ height: "100px",width:"150px", marginLeft:"16px" }}
                    alt="..."
                    src={
                      "https://wallpapercave.com/wp/wp2674200.jpg"
                    }
                    className=" shadow-xl rounded  align-middle border-none "
                  />
            </div> 
           
                  
          </div>
         


          <div className="w-full lg:w-6/12" style={{ marginLeft: "60px" }}>
            <div
              // style={{ backgroundColor: "gray" }}
              className="relative w-full mb-3   rounded bg-lightBlue-800 "
            >
              <h3 className="ml-2 text-lg ">
                Company: Cambodia Securities Exchange Co.,Ltd(CSX)
              </h3>
              <div
                style={{ marginLeft: "96px", maxWidth: "400px" }}
                className="mt-2 mr-4  "
              >
                With the basic purpose of achieving high economic growth by
                facilitating flows of capital, investment and reallocation of
                capital based oncapital market mechanisms, in November 2006, The
                Ministry of Economy and Finance of the Kingdom of Cambodia and
                Korea Exchange signed a Memorandum of understanding on “the
                Development of the Securities Market in Cambodia”.
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <div className="mt-2 ">
                <ol
                  style={{
                    marginLeft: "20px",
                    maxWidth: "550px",
                    color: "DarkGray",
                  }}
                  className="mt-2 "
                >
                  <li>
                    {" "}
                    Address: CSX Building, st.Preah Mohaksat Treiyani Kossamak
                    (St.106), Sangkat Wat Phnom, Khan Duan Penh, Phnom Penh,
                    Kingdom of Cambodia.
                  </li>
                  <li>
                    Tel:{" "}
                    <a href="tel:+855 23 958 888" target="_blank">
                      (855) 23 958 888
                    </a>
                  </li>
                  <li>
                    Fax:{" "}
                    <a href="tel:+855 23 955 558" target="_blank">
                      (855) 23 955 558
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a href="mailto:http://www.csx.com.kh/" target="_blank">
                      info@csx.com.kh
                    </a>
                  </li>
                  <li>
                    Website:{" "}
                    <a href="http://www.csx.com.kh/" target="_blank">
                      http://www.csx.com.kh/
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

AboutUs.defaultProps = {
  color: "light",
};

AboutUs.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
