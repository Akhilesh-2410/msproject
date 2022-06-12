import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import {BsTelephone} from "react-icons/bs"


let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const NavBar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  let domNode = useClickOutside(() => {
    setShowOptions(false);
  });

  return (
    <nav className="h-[72px] z-50 w-screen fixed bg-white border-b-clinic-700  shadow-lg flex items-center px-6 lg:px-[calc(100vw/12)] py-1 lg:py-2 space-x-6">
      <img src={Logo} alt="" className="h-12 lg:h-full" />
      <div className="flex-1"></div>
      <div ref={domNode}>
        {/* <Link to="/forms/request-aid"> */}

        <button
          onClick={handleClick}
          className="font-poppins text-xs lg:text-sm font-medium py-1 hover:border-b transition-all duration-75 flex items-center justify-center space-x-2"
        >
          <AiOutlineForm className="w-6 h-6 aspect-square" />
          <p className="hidden lg:block"> Request for Aid</p>
        </button>
        {showOptions && (
          <div
            class="text-base z-50 origin-top-right absolute z-index: 1 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                href="/forms/request-aid/financial"
                class="text-gray-700 block px-4 py-2 text-sm "
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Financial
              </a>
              <a
                href="/forms/request-aid/non-financial"
                class="text-gray-700 block px-4 py-2 text-sm "
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Non Financial
              </a>
            </div>
          </div>
        )}

        {/* </Link> */}
      </div>
      
      <button className="font-poppins text-sm font-medium py-1 hover:border-b transition-all duration-75 flex items-center justify-center space-x-2">
        <BsTelephone className="w-6 h-6"/>
        <p className="hidden lg:block">Contact Us</p>
      </button>
    </nav>
  );
};

export default NavBar;
