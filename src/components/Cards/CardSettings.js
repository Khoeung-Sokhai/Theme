import React from "react";

// components

export default function CardSettings() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Make Order</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
          <div style={{ marginLeft: "10px"}} className="mt-2">
          <button style={{backgroundColor: "rgb(59 130 246)"} } class="bg-blue-500	 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-2">
          <a href="/admin/Sell">
              Sell
            </a>
         </button>
           <button style={{backgroundColor: "rgb(59 130 246)"}} class="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-2">
           <a href="/admin/Buy">
              Buy
            </a>
        </button>
          <button style={{backgroundColor: "rgb(59 130 246)"}} class="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-2">
          <a href="/admin/Change">
              Change
            </a>
         </button>
           <button style={{backgroundColor: "rgb(59 130 246)"}} class="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-2">
           <a href="/admin/Cancel">
              Cancel
            </a>
        </button>
        </div>
           
            <div className="flex flex-wrap mt-8">  
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Issue No
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                   Issue Name
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Quality
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Lucky"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                 
                  />
                </div>
              </div>
            </div>

         
          </form>
        </div>
      </div>
    </>
  );
}
