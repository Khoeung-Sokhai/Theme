import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <div className="mt-6 lg:mb-0 mb-6">
              <a
                  href="http://csx.com.kh/en/about/map.jsp"target="_blank" rel="noopener noreferrer"
                  className="text-blueGray-700 text-sm font-semibold py-1"
                >
                   CSX - Cambodia Securities Exchange{" "}
                </a>
              <ol>
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
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">

                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Usefule Links
                  </span>
                  <ul className="list-unstyled">
                  <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/admin/about-us"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/admin/contact-us"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()}
                {/* <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a> */}
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
