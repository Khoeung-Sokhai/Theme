import React, { useState, useEffect } from "react";
import Select from "react-select";
// import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import axios from "axios";
import CardRemain from "components/Cards/Order/CardRemain.js";

export default function CardSettings({ color }) {
  // const refresh = () => window.location.reload(true);

  const notify = () =>
    toast.success("Make Order Successfully...🤪", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  //   const showAlert = () => {
  //     try {
  //       alert('Hello World!');
  //     } catch (error) {
  //       console.log(error)
  //     }

  // };

  const types = [
    { value: "1", label: "Sell" },
    { value: "2", label: "Buy" },
    { value: "3", label: "Change" },
    { value: "4", label: "Cancel" },
  ];
  // const brokers = [
  //   { value: "001", label: "Broker A" },
  //   { value: "002", label: "Broker B" },
  //   { value: "003", label: "Broker C" },
  //   { value: "004", label: "Broker D" },
  //   { value: "005", label: "Broker E" },
  //   { value: "006", label: "Broker F" },
  // ];
  // // const issues = [{ value: "001", label: "Broker A" }];

  const [orderUV, setOrderUV] = useState("");
  // const [accountNo, setAccountNo] = useState("");
  // const [orderNo, setOrderNo] = useState("");
  const [orderQty, setOrderQty] = useState("");
  // const [originalOrderNo, setOriginalOrderNo] = useState("");
  const [issueCode, setIssueCode] = useState();
  const [orderType, setOrderType] = useState(types[0].value);
  const [brokerId, setBrokerId] = useState();
  // const [orderDate, setOrderDate] = useState("");

  const [getStocks, setStocks] = useState([]);
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

  function GetbrokerAPI(e) {
    e.preventDefault();
    var data = JSON.stringify({
      orderUV: orderUV,
      accountNo: "000001",
      // orderNo: orderNo,
      orderQty: orderQty,
      originalOrderNo: "1",
      brokerId: brokerId,
      orderDate: "2023-03-18",
      issueCode: issueCode,
      orderType: orderType,
      // issueName: issueName,
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
      })
      .catch(function (error) {
        console.log(error);
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
      {/* <script>
              function alert() {
                  alert("Your file is being uploaded!")
              }
    </script> */}
      <form onSubmit={GetbrokerAPI} action="/admin/Sell">
        <div className="bg-lightBlue-800 text-white border-lightBlue-700 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className=" text-xl font-bold uppercase">Make Order</h6>
              <button
                className=" bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded bg-sky-500 hover:bg-sky-700  outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={notify}
                // onClick={showAlert}

                // href="/admin/Sell"
                // onClick={(e) => e.preventDefault()}
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
            <div
              className=" flex flex-wrap uppercase text-black text-center  "
              style={{ marginRight: "auto", marginLeft: "auto" }}
            >
              <div
                style={{ width: "180px", marginLeft: "20px" }}
                onChange={(e) => setOrderType(e.target.value)}
                value={orderType}
              >
                <Select placeholder="Select Types" options={types} />
              </div>

              {/* <div
                style={{
                  width: "180px",
                  marginLeft: "30px",
                }}
                onChange={(e) => setBrokerId(e.target.value)}
                value={brokerId}
              >
                <Select placeholder="Select Brokers" options={brokers} />
              </div> */}
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
                    className=" text-left uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => setIssueCode(e.target.value)}
                    value={issueCode}
                  >
                    {getStocks.map((stock) => (
                      <option key={stock.id} > {stock.issueCode}</option>
                    ))}
                  </select>

                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Brokers
                  </label>
                  <select
                    className=" text-left uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // value={brokerId}
                    onChange={(e) => setBrokerId(e.target.value)}
                        value={brokerId}
                       
                  >
                    {getBroker.map((broker) => (
                      <option
                        key={broker.id}
                        // label={broker.brokerName}
                        
                      >
                        {" "}
                        {broker.brokerId}
                      </option>
                    ))}
                  </select>
                  {/* <select
                    onChange={(e) => setIssueCode(e)}
                    className=" form-select-control"
                  >
                    <option value="">Please select the user</option>
                    {
                      getStocks.map((stock) => (
                        <option key={stock.id}>{stock.issueSymbol}</option>
                      ))}
                  </select> */}

                  {/* <div
                    className="text-black"
                    onChange={(e) => setIssueCode(e.target.value)}
                    value={issueCode}
                  >
                    <Select placeholder="Select Brokers" options={issues} />
                  </div> */}
                  {/* <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Issue No
                  </label>
                  <input
                    onChange={(e) => setIssueCode(e.target.value)}
                    value={issueCode}
                    type="text"
                    required
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  /> */}
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase  text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Check Issue code & Symbol
                  </label>

                  {/* // <div key={stock.id}>
                    //   {stock.issueName}
                    // </div>     */}

                  <select className=" text-center uppercase border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    {getStocks.map((stock) => (
                      <option key={stock.id}>
                        {" "}
                        {stock.issueCode}: {stock.issueSymbol}
                      </option>
                    ))}
                    {/* {getStocks.map((stock) => (
                  
                      <option key={stock.id}> {stock.issueSymbol}</option>
                     
                    ))} */}
                  </select>

                  {/* <input
                    onChange={(e) => setOrderDate(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    type="date"
                    value={orderDate}
                  /> */}
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
                    onChange={(e) => setOrderQty(e.target.value)}
                    value={orderQty}
                    required
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
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-black  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Lucky"
                    onChange={(e) => setOrderUV(e.target.value)}
                    value={orderUV}
                    required
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