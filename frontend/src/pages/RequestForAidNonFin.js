import React, { useContext, useState } from "react";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import axios from "axios";
import { POST_DOC_URL, UPLOAD_URL } from "../api/APIRoutes";
import File from "../components/File";
import { useNavigate } from "react-router-dom";
import PopupContext from "../components/PopupContext";

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

  const [Lang, setLang] = useState("");
  const [Prof, setProf] = useState("");
  const [Org, setOrg] = useState("");
  const [Grade, setGrade] = useState("");
  const [Purpose, setPurpose] = useState("");
  const [Couns, setCouns] = useState("");
  const [Help, setHelp] = useState("");
  const [Any, setAny] = useState("");
  const [documents, setDocuments] = useState([]);

  const navigate = useNavigate();

  const {setPopup} = useContext(PopupContext);

  const uploadDocuments = (documents) =>
    new Promise((resolve, reject) => {
      let documentsURL = [];
      let count = documents.length;
      console.log(count);
      Array.from(documents).forEach(async (doc, ind, array) => {
        let formData = new FormData();
        formData.append("file", doc);
        if (doc.size >= 10485760) {
          count -= 1;
          return;
        }
        await axios
          .post(UPLOAD_URL, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            documentsURL.push(res.data);
            // console.log(documentsURL);
            if (documentsURL.length === count) {
              resolve(documentsURL);
            }
          })
          .catch((err) => reject(err));
      });
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Help === "No") {
      setAny("--");
    }
    if (
      true &&
      (Lang.length <= 0 ||
        Prof.length <= 0 ||
        Org.length <= 0 ||
        Grade.length <= 0 ||
        Purpose.length <= 0 ||
        Couns.length <= 0 ||
        Help.length <= 0 ||
        Any.length <= 0)
    ) {
      alert("Please fill all the fields");
    } else {
      let dataBody = {
        language: Lang,
        profession: Prof,
        organization: Org,
        grade: Grade,
        purposeOfAid: Purpose,
        counselling: Couns,
        ifHelp: Help,
        anyHelp: Any,
      };

      uploadDocuments(documents)
        .then((res) => {
          console.log("UPLOAD_DOCUMENTS", res);
          axios
            .post(
              POST_DOC_URL,
              {
                userid: `${localStorage.getItem("uid")}`,
                requirementType: "2",
                data: dataBody,
                document: res,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "access_token"
                  )}`,
                },
              }
            )
            .then((response) => {
              console.log(response);
              setPopup("SUCCESS", "Request submitted");
              navigate("/forms/request-aid/success");
            })
            .catch((error) => console.log(error));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <main className="w-full space-y-20">
      <div className="w-full">
        <section className="w-full my-8 space-y-1">
          <h1 className="text-6xl font-oswald">
            Request for Non Financial Aid
          </h1>
          <h2 className="text-lg font-poppins">
            Provide all the following details appropriately.
          </h2>
        </section>
      </div>

      <div className="w-full">
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">Required Info.</h1>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <TextField
              label="Language(s)"
              className="w-full"
              inputState={[Lang, setLang]}
            />
            <TextField
              label="Profession"
              className="w-full"
              inputState={[Prof, setProf]}
            />
            <TextField
              label="Organization"
              className="w-full"
              inputState={[Org, setOrg]}
            />
            <Dropdown
              options={grade}
              className="w-full"
              valueState={[Grade, setGrade]}
            />

            <TextArea
              label="Purpose for the Aid"
              className="w-full"
              inputState={[Purpose, setPurpose]}
            />
            <div className="flex items-center w-full space-x-2">
              <h3 className="font-poppins text-md w-full">
                If counselling , please select the type
              </h3>
              <Dropdown
                options={consell}
                className="w-full"
                valueState={[Couns, setCouns]}
              />
            </div>
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-md w-full">
                Have you Received any help previously?
              </h3>
              <Dropdown
                options={options}
                className="w-full"
                valueState={[Help, setHelp]}
              />
            </div>
            <TextArea
              label="If any, Specify it here"
              className="w-full"
              inputState={[Any, setAny]}
            />
          </div>
        </section>
      </div>
      <div className="w-full">
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">{"Documents"}</h1>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <File label="Documents" fileState={[documents, setDocuments]} />
            <div className="flex items-center w-full space-x-2 mt-20">
              <Button
                filled
                className="w-full lg:w-1/2"
                onClick={(e) => handleSubmit(e)}
              >
                {"Submit"}
              </Button>
              <Button className="w-full lg:w-1/2">{"Cancel"}</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RequestForAidNonFin;
