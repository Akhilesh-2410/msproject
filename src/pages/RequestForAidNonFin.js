import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";



const RequestForAidNonFin = () => {
  const consell = ["None", "Induction Conselling", "Exit Counselling"];
  const options = ["Yes", "No"];
  const grade = [
    "Post Graduate",
    "Under Graduate",
    "Higher Secondary",
    "Secondary",
    "Primary Education",
  ];


  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [State, setState] = useState("");
  const [Post, setPost] = useState("");

  const [Lang, setLang] = useState("");
  const [Prof, setProf] = useState("");
  const [Org, setOrg] = useState("");
  const [Grade, setGrade] = useState("");
  const [Purpose, setPurpose] = useState("");
  const [Couns, setCouns] = useState("");
  const [Help, setHelp] = useState("");
  const [Any, setAny] = useState("");

  return (
    <main className="w-full space-y-20">
      <div className="w-full">
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">Personal Info</h1>
            <h2 className="font-poppins text-sm">
              Provide your personal Info here.
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-2 space-y-6 lg:space-y-0">
              <TextField label="First Name" className="w-full lg:w-1/2" inputState={[FirstName, setFirstName]} />
              <TextField label="Last Name" className="w-full lg:w-1/2" inputState={[LastName, setLastName]} />
            </div>
            <TextField label="Email" className="w-full" inputState={[Email, setEmail]} />
            <TextField label="Phone Number" className="w-full" inputState={[Phone, setPhone]} />
            <TextArea label="Address" className="w-full" inputState={[Address, setAddress]} />
            <div className="flex items-center w-full space-x-2">
              <TextField label="State" className="w-1/2" inputState={[State, setState]} />
              <TextField label="Postal Code" className="w-1/2" inputState={[Post, setPost]} />
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

          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <TextField label="Language(s)" className="w-full" inputState={[Lang, setLang]} />
            <TextField label="Profession" className="w-full" inputState={[Prof, setProf]} />
            <TextField label="Organization" className="w-full" inputState={[Org, setOrg]} />
            <Dropdown options={grade} className="w-full" valueState={[Grade, setGrade]}>
              Select Grade
            </Dropdown>

            <TextArea label="Purpose for the Aid" className="w-full" inputState={[Purpose, setPurpose]} />
            <div className="flex items-center w-full space-x-2">
              <h3 className="font-poppins text-md w-full">
                If counselling , please select the type
              </h3>
              <Dropdown options={consell} className="w-full" valueState={[Couns, setCouns]}>
                Select
              </Dropdown>
            </div>
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-md w-full">
                Have you Received any help previously?
              </h3>
              <Dropdown options={options} className="w-full" valueState={[Help, setHelp]}>
                Options
              </Dropdown>
            </div>
            <TextArea label="If any, Specify it here" className="w-full" inputState={[Any, setAny]} />
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

export default RequestForAidNonFin;
