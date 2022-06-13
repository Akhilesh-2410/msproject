import React, { useContext, useState } from "react";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import axios from "axios";
import { SIGNUP_URL } from "../api/APIRoutes";
import PopupContext from "../components/PopupContext";

const CreateUID = () => {
  const [name, setName] = useState("");
  const [uid, setUid] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentOccupation, setParentOccupation] = useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const formatDate = (date) =>
    `${dob.split("-")[2]}/${dob.split("-")[1]}/${dob.split("-")[0]}`;

  const {setPopup} = useContext(PopupContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      uid.length <= 0 ||
      name.length <= 0 ||
      dob.length <= 0 ||
      aadhar.length <= 0 ||
      phoneNumber.length <= 0 ||
      email.length <= 0 ||
      parentName.length <= 0 ||
      parentOccupation.length <= 0 ||
      parentPhoneNumber.length <= 0 ||
      address.length <= 0 ||
      city.length <= 0 ||
      state.length <= 0
    )
      alert("Please fill all the fields");
    else {
      console.log(formatDate(dob));
      axios
        .post(
          SIGNUP_URL,
          {
            name: name,
            email: email,
            dob: formatDate(dob),
            phone: phoneNumber,
            uid: uid,
            AadharNumber: aadhar,
            parent_name: parentName,
            parent_occupation: parentOccupation,
            parent_phno: parentPhoneNumber,
            address: address,
            city: city,
            state: state,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setPopup("SUCCESS", "UID Created Successfully");
          console.log("SIGNUP_SUCCESS", res);
        })
        .catch((err) => {
          setPopup("ERROR", err.response.data.error);
          console.log("SIGNUP_ERROR", err.response.data.error);
        });
    }
  };

  return (
    <main className="w-full h-full font-poppins relative">
      <nav className="w-full lg:w-[calc(80vw)] flex p-6 fixed top-0 bg-white z-30">
        <div className="flex w-full flex-col lg:flex-row space-y-2 lg:space-y-0">
          <h1 className="font-oswald text-5xl font-medium">Create UID</h1>
          <div className="flex-1"></div>
        </div>
      </nav>
      <main className="p-6 lg:p-8 w-full space-y-6 mt-32 lg:mt-24">
        <section className="w-full flex flex-col items-start justify-start space-y-4 lg:space-y-12 lg:pr-36">
          <div className="w-full flex flex-col space-y-6">
            <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-2 space-y-6 lg:space-y-0">
              <TextField
                label="UID"
                className="w-full lg:w-1/3"
                inputState={[uid, setUid]}
              />
              <TextField
                label="Name"
                className="w-full lg:w-1/3"
                inputState={[name, setName]}
              />
              <TextField
                label="Aadhar Number"
                className="w-full lg:w-1/3"
                inputState={[aadhar, setAadhar]}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-2 space-y-6 lg:space-y-0">
              <TextField
                label="Date of Birth"
                type="date"
                className="w-full lg:w-1/3"
                inputState={[dob, setDob]}
              />
              <TextField
                label="Phone number"
                className="w-full lg:w-1/3"
                inputState={[phoneNumber, setPhoneNumber]}
              />
              <TextField
                label="Email"
                className="w-full lg:w-1/3"
                inputState={[email, setEmail]}
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-2 space-y-6 lg:space-y-0">
              <TextField
                label="Parent/Guardian name"
                className="w-full lg:w-1/3"
                inputState={[parentName, setParentName]}
              />
              <TextField
                label="Parent/Guardian occupation"
                className="w-full lg:w-1/3"
                inputState={[parentOccupation, setParentOccupation]}
              />
              <TextField
                label="Parent/Guardian phone no."
                className="w-full lg:w-1/3"
                inputState={[parentPhoneNumber, setParentPhoneNumber]}
              />
            </div>
            <TextArea
              label="Address"
              className="w-full"
              inputState={[address, setAddress]}
            />
            <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-2 space-y-6 lg:space-y-0">
              <TextField
                label="City"
                className="w-full lg:w-1/3"
                inputState={[city, setCity]}
              />
              <TextField
                label="State"
                className="w-full lg:w-1/3"
                inputState={[state, setState]}
              />
            </div>
          </div>
          <div className="flex space-x-2 items-center justify-center ">
            <button
              onClick={(e) => handleSubmit(e)}
              className="border-clinic-500 bg-clinic-500 rounded-md border-2 px-6 py-2 shadow-lg"
            >
              <div className="font-semibold text-lg text-white">Create UID</div>
            </button>
            <button className="border-clinic-500 rounded-md border-2 px-6 py-2 shadow-lg">
              <div className="font-semibold text-lg text-clinic-500">
                Cancel
              </div>
            </button>
          </div>
        </section>
      </main>
    </main>
  );
};

export default CreateUID;
