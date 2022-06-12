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
            <Dropdown options={grade} className="w-full">
              Select Grade
            </Dropdown>
            <div className="flex items-center w-full space-x-2">
              <TextField label="10th Marks (in %)" className="w-1/2" />
              <TextField label="12th Marks (in %)" className="w-1/2" />
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full space-x-2">
              <TextField label="10" className="w-1/2" />
              <TextField label="12th Marks (in %)" className="w-1/2" />
            </div>
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-left text-md w-full ">
                If college, course taken
              </h3>
              <TextField label="Name of the Course" className="w-full" />
            </div>
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-md text-left  w-full ">
                If college, CGPA (last Semester)
              </h3>
              <TextField label="CGPA" className="w-full" />
            </div>
          </div>
        </section>
      </div>

      <div className="w-full">
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">Scholarship / Financial Info</h1>
            <h2 className="font-poppins text-sm">
              Provide the details if Scholarship/Financial Assistance received already.
            </h2>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col space-y-3">

            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-left text-md w-full">
                Have you Received any help previously?
              </h3>
              <Dropdown options={options} className="w-full">
                Options
              </Dropdown>
            </div>
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-left text-md w-full">
                Applied for any assistance?
              </h3>
              <Dropdown options={options} className="w-full">
                Options
              </Dropdown>
            </div>

            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-left text-md w-full">
                If Yes, Financial Assistance being received
              </h3>
              <Dropdown options={grade} className="w-full">
                Select Grade
              </Dropdown>
            </div>

            <div className="flex items-center w-full ">
              <h3 className="font-poppins text-left text-md w-full">
                Assisted for period of
              </h3>
              <TextField label="Months" className="w-full" />
            </div>

            <div className="flex items-center w-full">
              <h3 className="font-poppins text-left text-md w-full">
                Total amount received
              </h3>
              <TextField label="Amount received" className="w-full" />
            </div>

            <div className="flex items-center w-full s">
              <h3 className="font-poppins text-left text-md w-full">
                Will it be renewed ?
              </h3>
              <Dropdown options={options} className="w-full">
                Options
              </Dropdown>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full">
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">Assistance Requirement</h1>
            <h2 className="font-poppins text-sm">
              Provide the details if Financial Assistance is required.
            </h2>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col space-y-3">

            <div className="flex items-center w-full ">
              <h3 className="font-poppins text-left text-md w-full">
                Required for Period of
              </h3>
              <TextField label="Months" className="w-full" />
            </div>

            <div className="flex items-center w-full">
              <h3 className="font-poppins text-left text-md w-full">
                Total Amount Required
              </h3>
              <TextField label="Amount (per Year)" className="w-full" />
            </div>
            <TextArea label="Purpose for the Aid" className="w-full" />


            <TextArea label="If anyother help to be done " className="w-full" />
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
