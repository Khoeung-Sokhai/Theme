import React, { useState, useEffect } from "react";
// import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import CardRemain from "components/Cards/Order/CardRemain.js";

// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function CardSettings({ color }) {
  const notify = () =>  toast.success('Make order successfully...', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const notifyError = () =>  toast.success('Error...', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  
  // Reload the page after the toast message is displayed
 

  var date = new Date();
  const refresh = () => window.location.reload(true);
  const [orderUV, setOrderUV] = useState([]);
  const [orderQty, setOrderQty] = useState([]);
  const [issueCode, setIssueCode] = useState([]);
  const [orderType, setOrderType] = useState([]);
  const [brokerId, setBrokerId] = useState([]);
  const [getStocks, setStocks] = useState([]);
  const [remainQty, setRemain] = useState([]);
  useEffect(() => {
    async function fetchStock() {
      const URL = "http://localhost:8080/api/issue-info";
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

  const [getBroker, setBrokers] = useState([]);
  useEffect(() => {
    async function fetchStock() {
      const URL = "http://localhost:8080/api/brokers-account-info";
      try {
        const res = await axios.get(URL);
        console.log(res.data.data);

        setBrokers(Object.values(res.data.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchStock();
  }, []);

  const [getTypes, setTypes] = useState([]);
  useEffect(() => {
    async function fetchStock() {
      const URL = "http://localhost:8080/api/types-info";
      try {
        const res = await axios.get(URL);
        console.log(res.data.data);

        setTypes(Object.values(res.data.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchStock();
  }, []);

  function GetbrokerAPI(e) {
    e.preventDefault();
    var data = JSON.stringify({
      orderUV: orderUV,
      accountNo: "A00001",
      orderQty: orderQty,
      originalOrderNo: "1",
      brokerId: brokerId,
      orderDate: date,
      issueCode: issueCode,
      orderType: orderType,
      remainQty: orderQty,

    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/broker-order",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // window.location.reload(notify);
        setTimeout(function() {
          window.location.reload(notify);
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
        window.location.reload(error);
      });
     
   
  }
  const handleChange = (event) => {
    setOrderUV(event.target.value);
    // setAccountNo(event.target.value);

    setOrderQty(event.target.value);
    // setOriginalOrderNo(event.target.value);
    setIssueCode(event.target.value);
    setOrderType(event.target.value);
  };

  return (
    <>
      <form onSubmit={GetbrokerAPI} action="/admin/Sell">
        <div className="bg-lightBlue-800 text-white border-lightBlue-700 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className=" text-xl font-bold uppercase" >Make Order</h6>

              <button
                className=" bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded bg-sky-500 hover:bg-sky-700  outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={notify}
                // onClick={refresh}

              >
                Order
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </button>
            </div>
          </div>

          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="flex flex-wrap mt-4">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Order Types
                  </label>
                  <select
                    className=" text-center uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setOrderType(e.target.value)}
                    value={orderType}
                  >
                    <option value="" disabled selected hidden>
                      Choose Type
                    </option>
                    {getTypes.map((types) => (
                      <option key={types.id} label={types.orderName}>
                        {" "}
                        {types.orderType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Brokers
                  </label>
                  <select
                    className=" text-center uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // value={brokerId}
                    
                    onChange={(e) => setBrokerId(e.target.value)}
                    value={brokerId}
                  >
                    <option value="" disabled selected hidden>
                      Choose Brokers
                    </option>
                    {getBroker.map((broker) => (
                      <option key={broker.id} label={broker.brokerName} >
                        {" "}
                        {broker.brokerId}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <hr className="mt-2 border-b-1 border-blueGray-300" />
            <div className="flex flex-wrap mt-4">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Issue Code
                  </label>
                  <select
                    className=" text-center uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setIssueCode(e.target.value)}
                    value={issueCode}
                  >
                    <option value="" disabled selected hidden>
                      Select One
                    </option>
                    {getStocks.map((stock) => (
                      <option key={stock.id}> {stock.issueCode}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Issue Symbol
                  </label>

                  <select
                    className=" text-center uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setIssueCode(e.target.value)}
                    value={issueCode}
                  >
                    <option value="" disabled selected hidden>
                      Auto Show
                    </option>
                    {getStocks.map((stock) => (
                      <option key={stock.id} label={stock.issueSymbol}>
                        {" "}
                        {stock.issueCode}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    className=" text-center border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Lucky"
                    onChange={(e) => setOrderQty(e.target.value)}
                    value={orderQty}
                    required
                    placeholder="Quantity..."
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Price UV
                  </label>
                  <input
                    type="number"
                    className="text-center border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Lucky"
                    onChange={(e) => setOrderUV(e.target.value)}
                    value={orderUV}
                    required
                    placeholder="Price..."
                  />
                </div>
              </div>
            </div>
            <div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <CardRemain color="dark" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
