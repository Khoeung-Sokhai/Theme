import React, { useState, useEffect } from "react";
import axios from "axios";
// components
export default function CardBalance() {
  const [balance, setBalance] = useState("");
  const [amount, setAmount] = useState("");
  const [getStocks, setStocks] = useState([]);

  useEffect(() => {
    async function fetchStock() {
      const URL = "http://localhost:8080/api/balance-info";
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
  function GetbrokerAPI(e) {
    e.preventDefault();
    var data = JSON.stringify({
      balance: balance,
      amount: amount,
      accountNo: "000003",
    });
    // const deposit = (event) => {
    //   event.preventDefault();
    //   const amount = Number(event.target.elements.amount.value);
    //   setBalance(balance + amount);
    //   event.target.elements.amount.value = '';
    // };

    // const withdraw = (event) => {
    //   event.preventDefault();
    //   const amount = Number(event.target.elements.amount.value);
    //   if (balance - amount < 0) {
    //     alert('Insufficient funds');
    //   } else {
    //     setBalance(balance - amount);
    //     event.target.elements.amount.value = '';
    //   }
    // };

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/balance-order",
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
    setBalance(event.target.value);
    setAmount(event.target.value);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-lightBlue-900 w-full mb-6 sshadow-2xl rounded-lg">
        <div className="text-white rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className=" relative w-full px-4 max-w-full flex-grow flex-1 text-center">
            {/* {getStocks
                        .sort((a, b) => b.orderUV - a.orderUV)
                        .slice(0,1)
                        .map((stock) => (
                          <h1> Account Balance: {stock.balance-stock.amount}</h1>
            ))} */}
              
              <br />

              <form onSubmit={GetbrokerAPI}>
                <label htmlFor="amount">Deposit Amount:</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  style={{
                    color: "black",
                    borderRadius: "15px",
                    height: "30px",
                  }}
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                />
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  style={{
                    color: "black",
                    borderRadius: "15px",
                    height: "30px",
                  }}
                  onChange={(e) => setBalance(e.target.value)}
                  value={balance}
                />
                <button
                  style={{ backgroundColor: "green", borderRadius: "5px" }}
                  type="submit"
                >
                  Deposit
                </button>
              </form>
              <br />
              {/* <form onSubmit={GetbrokerAPI}>
                <label htmlFor="amount">Withdraw Amount:</label>
                <input
                  onChange={(e) => setBalance(e.target.value)}
                  value={balance}
                  type="number"
                  id="amount"
                  name="amount"
                  style={{
                    color: "black",
                    borderRadius: "15px",
                    height: "30px",
                  }}
                />
                <button
                  style={{
                    backgroundColor: "red",
                    borderRadius: "5px",
                    height: "30px",
                  }}
                  type="submit"
                >
                  Withdraw
                </button>
              </form> */}
            </div>
          </div>
        </div>
        <div className="block w-full overflow-hidden">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Date
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  ACCOUNT №
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  23-03-2023
                </td>
                <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  111 222 333
                </td>
                <td
                  className="text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 "
                  style={{ color: "green" }}
                >
                  1,480 KHR&#6107;
                  <i className="fas fa-arrow-up mr-2"></i>
                </td>
              </tr>
              <tr>
                <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  23-03-2023
                </td>
                <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  111 222 333
                </td>
                <td
                  className=" text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 "
                  style={{ color: "red" }}
                >
                  1,480 KHR&#6107;
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
