import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TextOutput from "../components/TextOutput";

const SubmissionPreview = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [uid, setUid] = useState("");
  const [type, setType] = useState(0);

  useEffect(() => {
    setUid(searchParams.get("uid"));
    setType(parseInt(searchParams.get("type")));

  }, []);

  return (
    <main className="w-full h-full font-poppins relative">
      <nav className="w-full lg:w-[calc(80vw)] flex p-6 fixed top-0 bg-white">
        <div className="flex w-full flex-col lg:flex-row space-y-2 lg:space-y-0">
          <h1 className="font-oswald text-5xl font-medium">
            {type === 1 && "Request for Financial Aid"}
            {type === 2 && "Request for Non-Financial Aid"}
            {type === 3 && "Monthly update"}
          </h1>
          <div className="flex-1"></div>
          <div className="flex w-full lg:w-fit h-fit space-x-2 z-30">
            <button className="border-green rounded-md border-2 px-4 py-1 shadow-lg">
              <div className="font-semibold text-green">Approve</div>
            </button>
            <button className="border-red rounded-md border-2 px-4 py-1 shadow-lg">
              <div className="font-semibold text-red">Reject</div>
            </button>
          </div>
        </div>
      </nav>
      <section className="p-6 lg:p-8 w-full space-y-6 my-32 lg:my-24">
        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b border-[rgba(0,0,0,.4)]">
          <div className="w-full lg:w-1/4 flex items-center lg:justify-start justify-center">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
              className="rounded-full aspect-square w-36 max-h-36"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full gap-y-6 gap-x-6">
            <TextOutput label={"UID"} text={uid} />
            <TextOutput label={"Name"} text={"John Doe"} />
            <TextOutput label={"Date of Birth"} text={"29/11/2006"} />
            <TextOutput label={"Contact no."} text={"9988776600"} />
            <TextOutput label={"Email Address"} text={"johndoe@example.com"} />
            <TextOutput label={"Aadhar Number"} text={"564564646657657"} />
            <TextOutput label={"Parent/Guardian Name"} text={"Alice Doe"} />
            <TextOutput
              label={"Parent/Guardian Occupation"}
              text={"Software Engineer"}
            />
            <TextOutput
              label={"Parent/Guardian Contact no."}
              text={"9977665500"}
            />
            <TextOutput label={"Address"} text={"123, ABC Road"} />
            <TextOutput label={"City"} text={"Bangalore"} />
            <TextOutput label={"State"} text={"Karnataka"} />
          </div>
        </section>
        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b border-[rgba(0,0,0,.4)]">
          <h1 className="font-semibold text-3xl w-full lg:w-1/4">
            Academic Info
          </h1>

          <div className="w-full space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full gap-y-6 gap-x-6">
              <TextOutput label={"Name of Institute"} text={"ABC School"} />
              <TextOutput label={"Board of Education"} text={"CBSE"} />
              <TextOutput label={"Type of Institute"} text={"Private"} />
              <TextOutput label={"Current Grade"} text={"VIII"} />
              <TextOutput label={"10th Percent."} text={"--"} />
              <TextOutput label={"12th Percent."} text={"--"} />
              <TextOutput
                label={"If College, Course taken"}
                text={"Engineering"}
              />
              <TextOutput label={"If College, CGPA (last SEM)"} text={"9.45"} />
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b border-[rgba(0,0,0,.4)]">
          <h1 className="font-semibold text-3xl w-full lg:w-1/4">
            Scholarship/ Financial Assistance received already
          </h1>

          <div className="w-full space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full gap-y-6 gap-x-6">
              <TextOutput label={"Applied for any assistance ?"} text={"No"} />
              <TextOutput
                label={"Financial Assistance being received"}
                text={"CBSE"}
              />
              <TextOutput label={"Assisted for Period of"} text={"NA"} />
              <TextOutput label={"Total Amount received"} text={"NA"} />
              <TextOutput label={"Will be renewed"} text={"No"} />
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b border-[rgba(0,0,0,.4)]">
          <h1 className="font-semibold text-3xl w-full lg:w-1/4">
            Assistance required
          </h1>

          <div className="w-full space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full gap-y-6 gap-x-6">
              <TextOutput label={"Required for Period of"} text={"NA"} />
              <TextOutput
                label={"Total Amount required (per year)"}
                text={"NA"}
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b-border-[rgba(0,0,0,.4)]">
          <h1 className="font-semibold text-3xl w-full lg:w-1/4">Documents</h1>

          <div className="w-full space-y-6"></div>
        </section>
      </section>
    </main>
  );
};

export default SubmissionPreview;
