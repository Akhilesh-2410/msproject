import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";

const RequestForAid = () => {
  const options = ["Yes", "No"];
  const grade = [
    "Post Graduate",
    "Under Graduate",
    "Higher Secondary",
    "Secondary",
    "Primary Education",
  ];
  return (
    <main className="w-full space-y-20">
      <div className="w-full">
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">Academic Info</h1>
            <h2 className="font-poppins text-sm">
              Provide your Academic Info here.
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col space-y-3">
            <TextField label="Name of Institute" className="w-full" />
            <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-2 space-y-4 lg:space-y-0">
              <Dropdown
                options={["CBSE", "State Board", "ICSE"]}
                className="w-full"
                placeholder="Select Board of Education"
              />
              <Dropdown
                options={["Private", "Public"]}
                className="w-full"
                placeholder="Select Type of Institute"
              />
            </div>
            <div className="flex items-center w-full space-x-2">
              <TextField label="10th Marks (in %)" className="w-1/2" />
              <TextField label="12th Marks (in %)" className="w-1/2" />
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full space-x-2">
              <TextField label="10" className="w-1/2" />
              <TextField label="12th Marks (in %)" className="w-1/2" />
            </div>
          </div>
        </section>
      </div>

      <div className="w-full">
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">Additional Info</h1>
            <h2 className="font-poppins text-sm">
              Provide your Additional Info here.
            </h2>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col space-y-3">
            <TextField label="Language(s)" className="w-full" />
            <TextField label="Profession" className="w-full" />
            <TextField label="Organization" className="w-full" />
            <Dropdown options={grade} className="w-full">
              Select Grade
            </Dropdown>

            <TextArea label="Purpose for the Aid" className="w-full" />

            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-md w-full">
                Have you Received any help previously?
              </h3>
              <Dropdown options={options} className="w-full">
                Options
              </Dropdown>
            </div>
            <TextArea label="If any, Specify it here" className="w-full" />
            <div className="flex items-center w-full space-x-2">
              <Button label="Submit" filled className="w-1/2">
                Submit
              </Button>
              <Button label="Cancel" className="w-1/2">
                Cancel
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RequestForAid;
