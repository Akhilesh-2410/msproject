import React, { useState } from "react";
import TextArea from "../components/TextArea";
import File from "../components/File"
import TextField from "../components/TextField";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";


const MonthlyUpdate = () => {

    const [Files, setFiles] = useState("");
    const [Purpose, setPurpose] = useState("");

    return (
        <>
            <main className="w-full space-y-20">
                <div className="w-full">
                    <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0">
                        <div className="w-full lg:w-1/2 flex-col space-y-1">
                            <h1 className="text-3xl font-oswald">Monthly Updates</h1>
                            <h2 className="font-poppins text-sm">
                                Provide the required details.
                            </h2>
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                            
                                <h3 className="font-poppins text-left text-md w-full">
                                    Upload your current grade Marksheets and Medical Documents (if any)
                                </h3>
                                <File valueState={[Files, setFiles]} />
                            

                            <div className="flex items-center w-full space-x-2">
                                <TextArea label="Purpose for the Aid" className="w-full" inputState={[Purpose, setPurpose]} />
                            </div>


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
        </>
    );
}

export default MonthlyUpdate;