import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import { useTranslation } from "react-i18next";

const RequestForAid = () => {
  const options = ["Yes", "No"];
  const grade = [
    "Post Graduate",
    "Under Graduate",
    "Higher Secondary",
    "Secondary",
    "Primary Education",
  ];

  const { t, i18n } = useTranslation();

  const [nameOfInstitute, setNameOfInstitute] = useState("");
  const [boardOfEdu, setBoardOfEdu] = useState("");
  const [TypeOfEdu, setTypeOfEdu] = useState("");
  const [Grade, setGrade] = useState("");
  const [PercentageTen, setPercentageTen] = useState("");
  const [PercentageTwel, setPercentageTwel] = useState("");
  const [MarkTen, setMarkTen] = useState("");
  const [MarkTwel, setMarkTwel] = useState("");
  const [Course, setCourse] = useState("");
  const [Cgpa, setCgpa] = useState("");
  const [Help, setHelp] = useState("");
  const [Assistance, setAssistance] = useState("");
  const [Amount, setAmount] = useState("");
  const [Renew, setRenew] = useState("");
  const [FinGrade, setFinGrade] = useState("");
  const [FinFrom, setFinFrom] = useState("");
  const [FinTo, setFinTo] = useState("");
  const [AidFrom, setAidFrom] = useState("");
  const [AidTo, setAidTo] = useState("");
  const [GetAmount, setGetAmount] = useState("");
  const [Purpose, setPurpose] = useState("");
  const [AnyHelp, setAnyHelp] = useState("");


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
            <TextField label="Name of Institute" className="w-full" inputState={[nameOfInstitute, setNameOfInstitute]} />
            <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-2 space-y-4 lg:space-y-0">
              <Dropdown
                options={["CBSE", "State Board", "ICSE"]}
                className="w-full"
                placeholder="Select Board of Education"
                valueState={[boardOfEdu, setBoardOfEdu]}
              />
              <Dropdown
                options={["Private", "Public"]}
                className="w-full"
                placeholder="Select Type of Institute"
                valueState={[TypeOfEdu, setTypeOfEdu]}
              />
            </div>
            <Dropdown options={grade} className="w-full" valueState={[Grade, setGrade]}>
              Select Grade
            </Dropdown>
            <div className="flex items-center w-full space-x-2">
              <TextField label="10th Marks (in %)" className="w-1/2" inputState={[PercentageTen, setPercentageTen]}/>
              <TextField label="12th Marks (in %)" className="w-1/2" inputState={[PercentageTwel, setPercentageTwel]}/>
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full space-x-2">
              <TextField label="10" className="w-1/2" inputState={[MarkTen, setMarkTen]}/>
              <TextField label="12th Marks (in %)" className="w-1/2" inputState={[MarkTwel, setMarkTwel]}/>
            </div>
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-left text-md w-full ">
                If college, course taken
              </h3>
              <TextField label="Name of the Course" className="w-full" inputState={[Course, setCourse]}/>
            </div>
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-md text-left  w-full ">
                If college, CGPA (last Semester)
              </h3>
              <TextField label="CGPA" className="w-full" inputState={[Cgpa, setCgpa]}/>
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
              <Dropdown options={options} className="w-full" valueState={[Help, setHelp]}>
                Options
              </Dropdown>
            </div>
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-left text-md w-full">
                Applied for any assistance?
              </h3>
              <Dropdown options={options} className="w-full" valueState={[Assistance, setAssistance]}>
                Options
              </Dropdown>
            </div>

            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-left text-md w-full">
                If Yes, Financial Assistance being received
              </h3>
              <Dropdown options={grade} className="w-full" valueState={[FinGrade, setFinGrade]}>
                Select Grade
              </Dropdown>
            </div>

           
              <h3 className="font-poppins text-left text-md w-full">
                Assisted for period of
              </h3>
              <div className="flex items-center w-full space-x-3">
              <TextField label="From" type = "date"  className="w-1/2 text-right" valueState={[FinFrom, setFinFrom]}/>
              <TextField label="To" type = "date" className="w-1/2" valueState={[FinTo, setFinTo]}/>
              </div>

            <div className="flex items-center w-full">
              <h3 className="font-poppins text-left text-md w-full">
                Total amount received
              </h3>
              <TextField label="Amount received" className="w-full" inputState={[Amount, setAmount]}/>
            </div>

            <div className="flex items-center w-full s">
              <h3 className="font-poppins text-left text-md w-full">
                Will it be renewed ?
              </h3>
              <Dropdown options={options} className="w-full" valueState={[Renew, setRenew]}>
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

            
              <h3 className="font-poppins text-left text-md w-full">
                Required for Period of
              </h3>
              <div className="flex items-center w-full space-x-3 ">
              <TextField label="From" type = "date" className="w-1/2" valueState={[AidFrom, setAidFrom]}/>
              <TextField label="To" type = "date" className="w-1/2" valueState={[AidTo, setAidTo]}/>
            </div>

            <div className="flex items-center w-full">
              <h3 className="font-poppins text-left text-md w-full">
                Total Amount Required
              </h3>
              <TextField label="Amount (per Year)" className="w-full" inputState={[GetAmount, setGetAmount]}/>
            </div>
            <TextArea label="Purpose for the Aid" className="w-full" inputState={[Purpose, setPurpose]}/>


            <TextArea label="If anyother help to be done " className="w-full" inputState={[AnyHelp, setAnyHelp]}/>
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
