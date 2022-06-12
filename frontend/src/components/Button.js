import React from "react";

export default function Button({
  type = "submit",
  className = "",
  processing,
  children,
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center justify-center px-4 py-2 bg-teal border border-transparent rounded-md font-poppins-bold text-xs text-white uppercase tracking-widest  transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </button>
  );
}
