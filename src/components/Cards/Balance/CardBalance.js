import React, { useState, useEffect } from "react";
import axios from "axios";
// components
export default function CardBalance() {
  const [balance, setBalance] = useState(0);

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

  const [getBal, setBal] = useState([]);

  const deposit = (event) => {
    event.preventDefault();
    const amount = Number(event.target.elements.amount.value);
    setBalance(balance + amount);
    event.target.elements.amount.value = "";
  };

  const withdraw = (event) => {
    event.preventDefault();
    const amount = Number(event.target.elements.amount.value);
    if (balance - amount < 0) {
      alert("Insufficient funds");
    } else {
      setBalance(balance - amount);
      event.target.elements.amount.value = "";
    }
  };
  useEffect(() => {
    async function fetchStock() {
      const URL = "http://localhost:8080/api/balance-info";
      try {
        const res = await axios.get(URL);
        console.log(res.data.data);

        setBal(Object.values(res.data.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchStock();
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-lightBlue-900 w-full mb-6 sshadow-2xl rounded-lg">
        <div className="text-white rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className=" relative w-full px-4 max-w-full flex-grow flex-1 text-center">
              <h1>Account Balance: {balance}</h1>
              <br />
              <form onSubmit={deposit}>
                <label htmlFor="amount">Deposit Amount:</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  style={{
                    color: "black",
                    borderRadius: "10px",
                    height: "40px",
                    marginLeft:"25px"
                  }}
                />
                 <button style={{backgroundColor:"green", height:"40px",width:"110px"}} type="submit" class="ml-2 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                 Deposit
                </button>
              </form>
              <br />
              <form onSubmit={withdraw}>
                <label htmlFor="amount">Withdraw Amount:</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  style={{
                    color: "black",
                    borderRadius: "10px",
                    height: "40px",
                    marginLeft:"10px"
                  }}
                />
                {/* <button style={{backgroundColor:'red', borderRadius:'5px',height:'30px'}} type="submit">Withdraw</button> */}
                <button style={{backgroundColor:"red", height:"40px"}} type="submit" class="ml-2 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Withdraw
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr style={{width:"450px", marginLeft:"auto",marginRight:"auto"}} className="mt-2 border-b-1 border-blueGray-300 " />
        <div className="block w-full overflow-hidden mt-4">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Date
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Balance
                </th>
                <th className="px-6 bg-lightBlue-800 text-lightBlue-300 align-middle border border-solid border-lightBlue-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {getBal.slice(0, 14).map((bal) => (
                <tr>
                  <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {bal.date}
                  </td>
                  <td className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {bal.amount} &#6107;
                  </td>
                  <td style={{color:" #4CAF50"}} className="text-white text-center border-t-0 px-6 align-middle border-l-0  border border-solid border-lightBlue-700 py-3 border-r-0 text-xs whitespace-nowrap p-4 ">
                  {bal.status}
                    {/* <i className="fas fa-arrow-up mr-2"></i>  */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
// function balanceForBrokerSystem(brokerData) {
//   let balance = brokerData.balance;

//   for (let i = 0; i < brokerData.transactions.length; i++) {
//     let transaction = brokerData.transactions[i];

//     if (transaction.type === 'deposit') {
//       balance += transaction.amount;
//     } else if (transaction.type === 'withdrawal') {
//       balance -= transaction.amount;
//     }
//   }

//   return balance;
// }
