import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <Link
        className="text-blueGray-500 block"
        href="/"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex ml-3">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className=" w-full rounded-full align-middle border-none shadow-lg"
              src={require("assets/img/1.png").default}
            />
          </span>
        </div>
      </Link>
      <div
        ref={popoverDropdownRef}
        style={{backgroundColor:"rgb(56 189 248)"}}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          " text-base z-50 float-center py-2 list-none text-center rounded shadow-lg min-w-full" 
          
        }
      >
        <Link
         to="/auth/login"
          className={
            "text-white text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
          }
          
        >
          Login
        </Link>
        <Link
          to="/auth/register"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
          }
          
        >
          Sign Up
        </Link>
        <Link
          to="/admin/Setting"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
          }
          
        >
          Setting
        </Link>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <Link
          to="/auth/logOut"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-white"
          }
          
        >
          LogOut
        </Link>
      </div>
    </>
  );
};

export default UserDropdown;
