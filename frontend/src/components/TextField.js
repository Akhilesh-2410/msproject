import React, { useState } from "react";
import { DB } from "../App";

const TextField = ({
  className = "w-full",
  label = "Here",
  inputState = [null, () => {}],
  type = "text",
  id = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = inputState;
  return (
    <div className={`${className} relative`}>
      <p
        className={`absolute top-0 left-0 select-none px-1 text-clinic-500 ${
          isFocused
            ? "opacity-100 text-xs -translate-y-2 translate-x-2 bg-white"
            : "opacity-0 translate-y-[50%] translate-x-2 text-base hidden"
        } font-poppins transition-all ease-in-out`}
      >
        {label}
      </p>
      <input
        type={type}
        placeholder={isFocused ? "" : label}
        onFocus={(e) => {
          setIsFocused(true);
        }}
        onBlur={(e) => {
          if (e.target.value.length <= 0) {
            setIsFocused(false);
          }
        }}
        onChange={(e) => {
          if (id.length > 0) DB.formData.put({ id, value: e.target.value });
          setValue(e.target.value);
          if (e.target.value.length <= 0) {
            setIsFocused(false);
          } else {
            setIsFocused(true);
          }
        }}
        value={value}
        className={`w-full appearance-none p-2 rounded-lg outline-none border-2 text-clinic-700 ${
          isFocused ? "border-clinic-500" : "border-clinic-700"
        }`}
      />
    </div>
  );
};

export default TextField;
