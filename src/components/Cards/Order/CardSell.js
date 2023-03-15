import React, { useState } from "react";
// components
import axios from "axios";
import CardRemain from "components/Cards/Order/CardRemain.js";
export default function CardSettings({ color }) {
  
  const brokers = [  
    {value: '001', text: 'Broker A'},
    {value: '002', text: 'Broker B'},
    {value: '003', text: 'Broker C'},
    {value: '004', text: 'Broker D'}, 
  ];
  const types = [
    {value: '1', text: 'Sell'},
    {value: '2', text: 'Buy'},
    {value: '3', text: 'Change'},
    {value: '4', text: 'Cancel'},
    
  ];
  
  const [orderUV, setOrderUV] = useState("");
  // const [accountNo, setAccountNo] = useState("");
  // const [orderNo, setOrderNo] = useState("");
  const [orderQty, setOrderQty] = useState("");
  // const [originalOrderNo, setOriginalOrderNo] = useState("");
  const [issueCode, setIssueCode] = useState("");
  const [orderType, setOrderType] = useState(types[0].value);
  const [brokerId, setBrokerId] = useState(brokers[0].value);
  
 
  function GetbrokerAPI(e) {
    e.preventDefault();
    var data = JSON.stringify({
      orderUV: orderUV,
      accountNo: "2",
      // orderNo: orderNo,
      orderQty: orderQty,
      originalOrderNo: "1",
      brokerId: brokerId,
      orderDate: "2023-03-14",
      issueCode: issueCode,
      orderType: orderType
     
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
      <form onSubmit={GetbrokerAPI} action="/admin/Sell">
        <div className="bg-lightBlue-800 text-white border-lightBlue-700 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className=" text-xl font-bold uppercase">Make Order</h6>
              <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Order
              </button>
            </div>
          </div>

          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
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
                  onChange={(e) => setIssueCode(e.target.value)}
                  value={issueCode}
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
                  // onChange={(e) => setIssueCode(e.target.value)}
                  // value={issueCode}
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
                    onChange={(e) => setOrderQty(e.target.value)}
                    value={orderQty}
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
                    // defaultValue="Lucky"
                    onChange={(e) => setOrderUV(e.target.value)}
                    value={orderUV}
                  />
                </div>
              </div>
            </div>
            <div>
            <select
              style={{
                marginLeft: "25px",
                borderRadius: "5px",
                backgroundColor: "wheat",
              }}
              onChange={(e) => setBrokerId(e.target.value)} 
              value={brokerId}
              className="uppercase text-black"
            >
              <option  value="001">Broker A</option>
              <option  value="002">Broker B</option>
              <option  value="003">Broker C</option>
              <option  value="004">Broker D</option>
              {/* <option  value="3">Broker C</option> */}
            </select>
            <select
            style={{
              marginLeft: "40px",
              borderRadius: "5px",
              backgroundColor: "wheat",
            }}
              className="uppercase text-black"
              onChange={(e) => setOrderType(e.target.value)} 
              value={orderType}
            >
              <option value="1">Sell</option>
              <option value="2">Buy</option>
              <option value="3">Change</option>
              <option value="4">Cancel</option>
            </select> 
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <CardRemain color="dark"/>
            </div>
           
          </div>
        </div>
      </form>
    </>
  );
}
