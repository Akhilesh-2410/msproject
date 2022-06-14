import React, { useEffect, useState } from "react";

const File = ({
  className = "w-full",
  label = "Here",
  fileState = [[], () => {}],
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [files, setFiles] = fileState;

  useEffect(() => {
    console.log(Array.from(files));
  });

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
        className={`w-full appearance-none p-2 rounded-lg outline-none border-2 text-clinic-700 ${
          isFocused ? "border-clinic-500" : "border-clinic-700"
        }`}
        type="file"
        id="formFileMultiple"
        multiple
        onChange={(e) => {
          setFiles(e.target.files);
        }}
      />
      <div className="">
        {Array.from(files).map(file => {
          return <p className="font-poppins text-xs text-clinic-500">{file.name}</p>
        }) }
      </div>
    </div>
  );
};

export default File;
