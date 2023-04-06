import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

// components

export default function ContactUs({ color }) {
  const refresh = () => window.location.reload(true);
  const [getContact, setContact] = useState([]);
  // const counter =0;

  // const id = counter+1;

  useEffect(() => {
    async function fetchStock() {
      const URL = "http://localhost:8080/api/contact-info";
      try {
        const res = await axios.get(URL);
        console.log(res.data.data);

        setContact(Object.values(res.data.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchStock();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [accountNo, setAccountNo] = useState("");

  function GetContactAPI(e) {
    e.preventDefault();
    var data = JSON.stringify({
      name: name,
      email: email,
      message: message,
      // id: useId,
      accountNo: "000001",
    });

    var config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/contact-order",
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
    setName(event.target.value);
    // setAccountNo(event.target.value);

    setEmail(event.target.value);
    // setOriginalOrderNo(event.target.value);
    setMessage(event.target.value);
  };

  return (
    <>
      <div
        className={
          " relative flex flex-col min-w-0 break-words  mb-6 shadow-lg rounded "
        }
      >
        <section className="relative block px-24 lg:pt-0 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center mt-4">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <form onSubmit={GetContactAPI}>
                      <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12">
                          <h4 className="text-2xl font-semibold text-left ">
                            Contact Us
                          </h4>
                          <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                            Complete this form and we will get back to you in 24
                            hours.
                          </p>
                        </div>
                        <img
                          style={{
                            height: "120px",
                            marginLeft: "auto",
                            marginRight:"auto",
                            
                            marginTop: "-10px",
                          }}
                          alt="..."
                          src={
                            "https://o.remove.bg/downloads/b81596e6-cd7b-4e0e-be2b-3f910005ceee/images-removebg-preview.png"
                          }
                          className=" rounded   border-none  "
                        />
                      </div>

                      <hr className=" border-b-1 border-blueGray-300" />
                      <div className="relative w-full mb-3 mt-4">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="full-name"
                        >
                          Full Name
                        </label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          type="text"
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          required
                          rows="4"
                          cols="80"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Type a message..."
                        />
                      </div>
                      <hr className="mt-4 border-b-1 border-blueGray-300" />
                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit"
                          onClick={refresh}
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

ContactUs.defaultProps = {
  color: "light",
};

ContactUs.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
