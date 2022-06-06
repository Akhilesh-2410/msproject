import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="h-[72px] w-full border-b-clinic-700  shadow-lg flex items-center px-6 lg:px-[calc(100vw/12)] py-2 space-x-6">
      <img src={Logo} alt="" className="h-full" />
      <div className="flex-1"></div>
      <Link to="/forms/request-aid">
        <button className="font-poppins text-sm font-medium py-1 hover:border-b transition-all duration-75">
          Request for Aid
        </button>
      </Link>
      <button className="font-poppins text-sm font-medium py-1 hover:border-b transition-all duration-75">
        Contact Us
      </button>
    </nav>
  );
};

export default NavBar;
