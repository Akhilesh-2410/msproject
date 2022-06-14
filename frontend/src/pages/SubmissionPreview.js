import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GET_POST_URL, GET_USER_DETAIL_URL } from "../api/APIRoutes";
import TextOutput from "../components/TextOutput";
import { GrDocumentImage, GrDocumentPdf } from "react-icons/gr";

const SubmissionPreview = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [uid, setUid] = useState("");
  const [type, setType] = useState(0);

  const [userDetails, setUserDetails] = useState({});
  const [requestDetails, setRequestDetails] = useState({});
  const [documentDetails, setDocumentDetails] = useState([]);

  useEffect(() => {
    // console.log(searchParams.get("uid"));
    setUid(searchParams.get("uid"));
    setType(parseInt(searchParams.get("type")));
  }, []);

  useEffect(() => {
    axios
      .get(`${GET_USER_DETAIL_URL}/${searchParams.get("uid")}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setUserDetails(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${GET_POST_URL}/${searchParams.get("uid")}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setRequestDetails(res.data.data);
        setDocumentDetails(res.data.document);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(userDetails);
    console.log(requestDetails);
    console.log(documentDetails);
  }, [userDetails, requestDetails, documentDetails]);

  const handleApproval = (e) => {
    e.preventDefault();
  };

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
      <main className="p-6 lg:p-8 w-full space-y-6 my-32 lg:my-24">
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
            <TextOutput label={"Name"} text={userDetails.name} />
            <TextOutput label={"Contact no."} text={userDetails.phone} />
            <TextOutput label={"Email Address"} text={userDetails.email} />
            <TextOutput
              label={"Aadhar Number"}
              text={userDetails.AadharNumber}
            />
            <TextOutput
              label={"Parent/Guardian Name"}
              text={userDetails.parent_name}
            />
            <TextOutput
              label={"Parent/Guardian Occupation"}
              text={userDetails.parent_occupation}
            />
            <TextOutput
              label={"Parent/Guardian Contact no."}
              text={userDetails.parent_phno}
            />
            <TextOutput label={"Address"} text={userDetails.address} />
            <TextOutput label={"City"} text={userDetails.city} />
            <TextOutput label={"State"} text={userDetails.state} />
          </div>
        </section>

        {type === 1 && (
          <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b border-[rgba(0,0,0,.4)]">
            <h1 className="font-semibold text-3xl w-full lg:w-1/4">
              Academic Info
            </h1>

            <div className="w-full space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full gap-y-6 gap-x-6">
                <TextOutput
                  label={"Name of Institute"}
                  text={requestDetails.nameOfInstitute}
                />
                <TextOutput
                  label={"Board of Education"}
                  text={requestDetails.boardOfEducation}
                />
                <TextOutput
                  label={"Type of Institute"}
                  text={requestDetails.typeOfInstitute}
                />
                <TextOutput
                  label={"Current Grade"}
                  text={requestDetails.currentGrade}
                />
                <TextOutput
                  label={"10th Percent."}
                  text={requestDetails.percentage10}
                />
                <TextOutput
                  label={"12th Percent."}
                  text={requestDetails.percentage12}
                />
                <TextOutput
                  label={"If College, Course taken"}
                  text={requestDetails.course}
                />
                <TextOutput
                  label={"If College, CGPA (last SEM)"}
                  text={requestDetails.cgpa}
                />
              </div>
            </div>
          </section>
        )}

        {type === 1 && (
          <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b border-[rgba(0,0,0,.4)]">
            <h1 className="font-semibold text-3xl w-full lg:w-1/4">
              Scholarship/ Financial Assistance received already
            </h1>

            <div className="w-full space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full gap-y-6 gap-x-6">
                <TextOutput
                  label={"Applied for any assistance ?"}
                  text={requestDetails.ifAssistance}
                />
                <TextOutput
                  label={"Financial Assistance being received"}
                  text={requestDetails.assistanceName}
                />
                <TextOutput
                  label={"Assisted for Period of"}
                  text={`From: ${requestDetails.assistanceFrom} To: ${requestDetails.assistanceTo}`}
                />
                <TextOutput
                  label={"Total Amount received"}
                  text={requestDetails.assistanceAmount}
                />
                <TextOutput
                  label={"Will be renewed"}
                  text={requestDetails.assistanceRenew}
                />
              </div>
            </div>
          </section>
        )}

        {type === 2 && (
          <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b border-[rgba(0,0,0,.4)]">
            <h1 className="font-semibold text-3xl w-full lg:w-1/4">
              Additional Info
            </h1>

            <div className="w-full space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full gap-y-6 gap-x-6">
                <TextOutput label={"Language"} text={requestDetails.language} />
                <TextOutput
                  label={"Profession"}
                  text={requestDetails.profession}
                />
                <TextOutput
                  label={"Organisation"}
                  text={requestDetails.organization}
                />
                <TextOutput label={"Grade"} text={requestDetails.grade} />
                <TextOutput
                  label={"Purpose for Aid"}
                  text={requestDetails.purposeOfAid}
                />
                <TextOutput
                  label={"Counselling Type"}
                  text={requestDetails.counselling}
                />
                <TextOutput
                  label={"Received Any help Previously"}
                  text={requestDetails.ifHelp}
                />
                <TextOutput
                  label={"Any other help needed"}
                  text={requestDetails.anyHelp}
                />
              </div>
            </div>
          </section>
        )}

        {type === 3 && (
          <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b border-[rgba(0,0,0,.4)]">
            <h1 className="font-semibold text-3xl w-full lg:w-1/4">
              Health Issues
            </h1>

            <div className="w-full space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full gap-y-6 gap-x-6">
                <TextOutput label={"Any Health issues observed?"} text={"NA"} />
              </div>
            </div>
          </section>
        )}

        {type === 1 && (
          <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b border-[rgba(0,0,0,.4)]">
            <h1 className="font-semibold text-3xl w-full lg:w-1/4">
              Assistance required
            </h1>

            <div className="w-full space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-3 items-start w-full gap-y-6 gap-x-6">
                <TextOutput
                  label={"Required for Period of"}
                  text={`From: ${requestDetails.aidFrom} To: ${requestDetails.aidTo}`}
                />
                <TextOutput
                  label={"Total Amount required (per year)"}
                  text={requestDetails.aidAmount}
                />
              </div>
            </div>
          </section>
        )}

        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-y-6 lg:space-y-0 lg:space-x-24 pb-8 border-b-border-[rgba(0,0,0,.4)]">
          <h1 className="font-semibold text-3xl w-full lg:w-1/4">Documents</h1>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 items-start justify-start">
            {documentDetails.map((doc) => (
              <a
                target={"_blank"}
                rel="noreferrer"
                href={doc.url}
                className="flex flex-col space-y-2"
              >
                {console.log(doc.name.substring(doc.name.lastIndexOf("."))) ||
                doc.name.substring(doc.name.lastIndexOf(".")) === ".jpg" ||
                doc.name.substring(doc.name.lastIndexOf(".")) === ".png" ? (
                  <GrDocumentImage className="w-12 h-auto" />
                ) : (
                  <GrDocumentPdf className="w-12 h-auto" />
                )}
                <p className="text-sm text-clinic-500 hover:underline cursor-pointer w-[10ch]">
                  {doc.name}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </main>
  );
};

export default SubmissionPreview;
