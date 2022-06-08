import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";

const RequestForAidNonFin = () => {

    const consell = ["Induction Conselling", "Exit Counselling"]
    const options = ['Yes', 'No']
    const grade = ["Post Graduate", "Under Graduate", "Higher Secondary", "Secondary","Primary Education"]

    return (
        <>
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
                        <TextField label="Email" className="w-full" />
                        <TextField label="Phone Number" className="w-full" />
                        <TextArea label="Address" className="w-full" />
                        <div className="flex items-center w-full space-x-2">

                            <TextField label="State" className="w-1/2" />
                            <TextField label="Postal Code" className="w-1/2" />
                        </div>
                    </div>
                </section>
            </div>
            <br></br>
            <br></br>

            <div className="w-full">
                <section className="w-full flex items-start justify-start">
                    <div className="w-1/2 flex-col space-y-1">
                        <h1 className="text-3xl font-oswald">Additional Info</h1>
                        <h2 className="font-poppins text-sm">
                            Provide your Additional Info here.
                        </h2>
                    </div>



                    <div className="w-1/2 flex flex-col space-y-6">
                        <TextField label="Language(s)" className="w-full" />
                        <TextField label="Profession" className="w-full" />
                        <TextField label="Organization" className="w-full" />
                        <Dropdown grade = {grade} className="w-full">Select Grade</Dropdown>



                        <TextArea label="Purpose for the Aid" className="w-full" />
                        <div className="flex items-center w-full space-x-2">
                            <h3 className="font-poppins text-md w-full">If counselling , please select the type</h3>
                            <Dropdown consell={consell} className="w-full">Select</Dropdown>

                        </div>
                        <div className="flex items-center w-full space-x-3">
                            <h3 className="font-poppins text-md w-full">Have you Received any help previously?</h3>
                            <Dropdown options={options} className="w-full">Options</Dropdown>

                        </div>
                        <TextArea label="If any, Specify it here" className="w-full" />
                        <div className="flex items-center w-full space-x-2">
                            <Button label="Submit" className="w-1/2 bg-teal">Submit</Button>
                            <Button label="Cancel" className="w-1/2">Cancel</Button>
                        </div>
                    </div>

                </section>

            </div>
        </>
    );
};

export default RequestForAidNonFin;
