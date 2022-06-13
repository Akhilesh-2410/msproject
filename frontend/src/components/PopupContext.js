import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const PopupContext = React.createContext();

export const PopupProvider = ({ children }) => {
  const [status, setStatus] = useState("NONE");
  const [text, setText] = useState("");

  useEffect(() => {
    if (status === "SUCCESS" || status === "ERROR") {
      setTimeout(() => {
        setStatus("NONE");
        setText("");
      }, 5000);
    }
  }, [status]);

  const setPopup = (status, text) => {
    if (status !== "ERROR" && status !== "SUCCESS") setStatus("NONE");
    setStatus(status);
    setText(text.length > 0 ? text : "Alert !");
  };

  return (
    <PopupContext.Provider value={{ setPopup }}>
      <div
        className={`transition font-poppins  ease-in-out duration-300 absolute top-10 left-1/2 -translate-x-1/2 text-lg z-[500] bg-white shadow-lg py-2 px-6 flex space-x-8 items-center justify-center 
        ${status === "NONE" && "hidden opacity-0 scale-0"} 
          ${status === "SUCCESS" &&
            "border-b-green border-b-4 opacity-100 scale-100"}
            ${status === "ERROR" &&
              "border-b-red border-b-4 opacity-100 scale-100"}`}
      >
        <p className="select-none">{text}</p>
        <button
          className="text-black hover:text-red"
          onClick={(e) => {
            setStatus("NONE");
            setText("");
          }}
        >
          <MdClose />
        </button>
      </div>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContext;
