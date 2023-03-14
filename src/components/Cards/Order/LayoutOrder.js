import React from "react";

// components

export default function CardSettings({ color }) {
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
              Order
            </button>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <div
              style={{ marginLeft: "auto", marginRight: "auto" }}
              className="mt-2"
            >
              <button
                style={{ backgroundColor: "Red", width: "108px" }}
                class="bg-blue-500	 hover:bg-sky-700 text-white font-bold py-2  rounded-2"
              >
                <a href="/admin/Sell">Sell</a>
              </button>
              <button
                style={{ backgroundColor: "rgb(59 130 246)", width: "108px" }}
                class="bg-red-300 hover:bg-sky-700 text-white font-bold py-2  rounded-2"
              >
                <a href="/admin/Buy">Buy</a>
              </button>
              <button
                style={{ backgroundColor: "rgb(59 130 246)", width: "108px" }}
                class="bg-red-300 hover:bg-sky-700 text-white font-bold py-2 rounded-2"
              >
                <a href="/admin/Change">Change</a>
              </button>
              <button
                style={{ backgroundColor: "rgb(59 130 246)", width: "108px" }}
                class="bg-red-300 hover:bg-sky-700 text-white font-bold py-2  rounded-2"
              >
                <a href="/admin/Cancel">Cancel</a>
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
