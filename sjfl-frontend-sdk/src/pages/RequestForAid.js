import React from "react";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";

const RequestForAid = () => {
  return (
    <div className="w-full">
      <section className="w-full flex items-start justify-start">
        <div className="w-1/2 flex-col space-y-1">
          <h1 className="text-3xl font-oswald">Personal Info</h1>
          <h2 className="font-poppins text-sm">
            Provide your personal Info here.
          </h2>
        </div>
        <div className="w-1/2 flex flex-col space-y-6">
          <div className="flex items-center w-full space-x-2">
            <TextField label="First Name" className="w-1/2" />
            <TextField label="Last Name" className="w-1/2" />
          </div>
          <TextArea label="Address" className="w-full" />
        </div>
      </section>
    </div>
  );
};

export default RequestForAid;
