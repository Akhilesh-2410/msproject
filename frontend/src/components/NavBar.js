import React, { useState, useEffect, useRef, useContext } from "react";
import Logo from "../assets/logo.png";
import LogoOnly from "../assets/logo_only.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineForm } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Trans } from "react-i18next";
import { TransContext } from "../App";
import Dropdown from "./Dropdown";
import { MdLogin, MdLogout } from "react-icons/md";
import { AuthContext } from "../api/AuthProvider";

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
  const { t, language, setLanguage } = useContext(TransContext);
  const { logout } = useContext(AuthContext);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const navigate = useNavigate();

  let domNode = useClickOutside(() => {
    setShowOptions(false);
  });

  const getCodeFromLang = (lang) => {
    switch (lang) {
      case "English":
        return "en";
      case "தமிழ்":
        return "ta";
      case "हिन्दी":
        return "hi";
      default:
        return "en";
    }
  };

  const getLangFromCode = (code) => {
    switch (code) {
      case "en":
        return "English";
      case "ta":
        return "தமிழ்";
      case "hi":
        return "हिन्दी";
      default:
        return "English";
    }
  };

  return (
    <nav className="h-[72px] z-50 w-screen fixed bg-white border-b-clinic-700  shadow-lg flex items-center px-6 lg:px-[calc(100vw/12)] py-1 lg:py-2 space-x-6">
      <img src={Logo} alt="" className="h-12 lg:h- hidden lg:block" />
      <img src={LogoOnly} alt="" className="h-12 lg:h-full lg:hidden" />
      <div className="flex-1"></div>
      <Dropdown
        className="w-[120px]"
        options={["English", "தமிழ்", "हिन्दी"]}
        valueState={[
          getLangFromCode(language),
          (l) => {
            console.log(getCodeFromLang(l));
            setLanguage(getCodeFromLang(l));
          },
        ]}
      />
      <div ref={domNode}>
        {/* <Link to="/forms/request-aid"> */}

        <button
          onClick={handleClick}
          className="font-poppins text-xs lg:text-sm font-medium py-1 pt-3 border-b border-b-transparent hover:border-b-black transition-all duration-75 flex items-center justify-center space-x-2"
        >
          <AiOutlineForm className="w-6 h-6 aspect-square" />
          <p className="hidden lg:block"> Request for Aid</p>
        </button>
        {showOptions && (
          <div
            class="text-base z-50 origin-top-left absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <Link
                to="/forms/request-aid/financial"
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-[rgba(200,200,200)] "
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Financial
              </Link>
              <Link
                to="/forms/request-aid/non-financial"
                class="text-gray-700 block px-4 py-2 text-sm hover:bg-[rgba(200,200,200)]"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Non Financial
              </Link>
            </div>
          </div>
        )}

        {/* </Link> */}
      </div>
      {localStorage.getItem("access_token") !== null &&
      localStorage.getItem("role") === "user" ? (
        <button
          onClick={(e) => {
            logout();
            navigate("/login");
          }}
          className="font-poppins text-sm font-medium py-1 pt-3 border-b border-b-transparent hover:border-b-black transition-all duration-75 flex items-center justify-center space-x-2"
        >
          <MdLogout className="w-6 h-6" />
          <p className="hidden lg:block">Logout</p>
        </button>
      ) : (
        <Link to="/login">
          <button className="font-poppins text-sm font-medium py-1 pt-3 border-b border-b-transparent hover:border-b-black transition-all duration-75 flex items-center justify-center space-x-2">
            <MdLogin className="w-6 h-6" />
            <p className="hidden lg:block">Login</p>
          </button>
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
