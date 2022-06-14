import React, { useContext, useState } from "react";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import { useTranslation } from "react-i18next";
import File from "../components/File";
import axios from "axios";
import { POST_DOC_URL, UPLOAD_URL } from "../api/APIRoutes";
import { useNavigate } from "react-router-dom";
import PopupContext from "../components/PopupContext";

const RequestForAid = () => {
  const options = ["No", "Yes"];
  const grade = [
    "Post Graduate",
    "Under Graduate",
    "Higher Secondary",
    "Secondary",
    "Primary Education",
  ];

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const { setPopup } = useContext(PopupContext);

  const [nameOfInstitute, setNameOfInstitute] = useState("");
  const [boardOfEdu, setBoardOfEdu] = useState("");
  const [TypeOfEdu, setTypeOfEdu] = useState("");
  const [Grade, setGrade] = useState("");
  const [PercentageTen, setPercentageTen] = useState("");
  const [PercentageTwel, setPercentageTwel] = useState("");
  const [Course, setCourse] = useState("");
  const [Cgpa, setCgpa] = useState("");
  const [Help, setHelp] = useState("");
  const [Amount, setAmount] = useState("");
  const [Assist, setAssist] = useState("");
  const [Renew, setRenew] = useState("");
  const [FinFrom, setFinFrom] = useState("");
  const [FinTo, setFinTo] = useState("");
  const [AidFrom, setAidFrom] = useState("");
  const [AidTo, setAidTo] = useState("");
  const [GetAmount, setGetAmount] = useState("");
  const [Purpose, setPurpose] = useState("");
  const [AnyHelp, setAnyHelp] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (PercentageTen.length <= 0) setPercentageTen("--");
    if (PercentageTwel.length <= 0) setPercentageTwel("--");
    if (Cgpa.length <= 0) setCgpa("--");
    if (Course.length <= 0) setCourse("--");
    if (Help === "No") {
      setAmount("--");
      setRenew("--");
      setFinFrom("--");
      setFinTo("--");
      setAssist("--");
    }
    if (AnyHelp.length <= 0) setAnyHelp("--");
    if (
      true &&
      (nameOfInstitute.length <= 0 ||
        boardOfEdu.length <= 0 ||
        TypeOfEdu.length <= 0 ||
        Grade.length <= 0 ||
        PercentageTen.length <= 0 ||
        PercentageTwel.length <= 0 ||
        Course.length <= 0 ||
        Cgpa.length <= 0 ||
        Help.length <= 0 ||
        Amount.length <= 0 ||
        Renew.length <= 0 ||
        FinFrom.length <= 0 ||
        FinTo.length <= 0 ||
        AidFrom.length <= 0 ||
        AidTo.length <= 0 ||
        GetAmount.length <= 0 ||
        Purpose.length <= 0 ||
        AnyHelp.length <= 0)
    ) {
      alert("Please fill all the fields");
    } else {
      let dataBody = {
        nameOfInstitute: nameOfInstitute,
        boardOfEducation: boardOfEdu,
        typeOfInstitute: TypeOfEdu,
        currentGrade: Grade,
        percentage10: PercentageTen,
        percentage12: PercentageTwel,
        course: Course,
        cgpa: Cgpa,
        ifAssistance: Help,
        assistanceName: Assist,
        assistanceAmount: Amount,
        assistanceRenew: Renew,
        assistanceFrom: FinFrom,
        assistanceTo: FinTo,
        aidFrom: AidFrom,
        aidTo: AidTo,
        aidAmount: GetAmount,
        purposeOfAid: Purpose,
        anyHelp: AnyHelp,
      };

      uploadDocuments(documents)
        .then((res) => {
          console.log("UPLOAD_DOCUMENTS", res);
          axios
            .post(
              POST_DOC_URL,
              {
                userid: `${localStorage.getItem("uid")}`,
                requirementType: "1",
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
              setPopup("SUCCESS", "Request sent successfully.");
              navigate("/forms/request-aid/success");
            })
            .catch((error) => console.log(error));
        })
        .catch((err) => console.log(err));
    }
  };

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

  return (
    <main className="w-full space-y-20">
      <div className="w-full">
        <section className="w-full my-8 space-y-1">
          <h1 className="text-6xl font-oswald">
            {t("Request for Financial Aid")}
          </h1>
          <h2 className="text-lg font-poppins">
            {t("Provide all the following details appropriately.")}
          </h2>
        </section>
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">{t("Academic Info")}</h1>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col space-y-3">
            <TextField
              label={t("Name of Institute")}
              className="w-full"
              inputState={[nameOfInstitute, setNameOfInstitute]}
            />
            <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-2 space-y-4 lg:space-y-0">
              <Dropdown
                options={["CBSE", "State Board", "ICSE"]}
                className="w-full"
                placeholder={t("Board of Education")}
                valueState={[boardOfEdu, setBoardOfEdu]}
              />
              <Dropdown
                options={["Private", "Public"]}
                className="w-full"
                placeholder={t("Type of Institute")}
                valueState={[TypeOfEdu, setTypeOfEdu]}
              />
            </div>
            <Dropdown
              placeholder={t("Current Grade")}
              options={grade}
              className="w-full"
              valueState={[Grade, setGrade]}
            />
            <div className="flex flex-col lg:flex-row items-center w-full space-y-3 lg:space-y-0 lg:space-x-2">
              <TextField
                label={t("10th Percent.")}
                className="w-full lg:w-1/2"
                inputState={[PercentageTen, setPercentageTen]}
              />
              <TextField
                label={t("12th Percent.")}
                className="w-full lg:w-1/2"
                inputState={[PercentageTwel, setPercentageTwel]}
              />
            </div>
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-left text-md w-full ">
                {t("If College, Course taken")}
              </h3>
              <TextField
                label={t("Name of Course")}
                className="w-full"
                inputState={[Course, setCourse]}
              />
            </div>
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-md text-left  w-full ">
                {t("If College, CGPA (last SEM)")}
              </h3>
              <TextField
                label="CGPA"
                className="w-full"
                inputState={[Cgpa, setCgpa]}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="w-full">
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">
              {t("Scholarship/ Financial Assistance received already")}
            </h1>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col space-y-3">
            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-left text-md w-full">
                {t("Applied for any assistance previously?")}
              </h3>
              <Dropdown
                options={options}
                className="w-full"
                valueState={[Help, setHelp]}
              />
            </div>

            <div className="flex items-center w-full space-x-3">
              <h3 className="font-poppins text-left text-md w-full">
                {t("Financial Assistance being received")}
              </h3>
              <TextField
                label=""
                className="w-full"
                inputState={[Assist, setAssist]}
              />
            </div>

            <h3 className="font-poppins text-left text-md w-full">
              {t("Assisted for Period of")}
            </h3>
            <div className="flex items-center w-full space-x-3">
              <TextField
                label="From"
                type="date"
                className="w-1/2 text-right"
                inputState={[FinFrom, setFinFrom]}
              />
              <TextField
                label="To"
                type="date"
                className="w-full lg:w-1/2"
                inputState={[FinTo, setFinTo]}
              />
            </div>

            <div className="flex flex-col lg:flex-row space-y-3 lg:space-x-2 lg:space-y-0 items-center w-full">
              <TextField
                label={t("Total Amount received")}
                className="w-full"
                inputState={[Amount, setAmount]}
              />
              <Dropdown
                options={options}
                className="w-full"
                valueState={[Renew, setRenew]}
                placeholder={t("Will be renewed")}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="w-full">
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">{t("Assistance required")}</h1>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col space-y-3">
            <h3 className="font-poppins text-left text-md w-full">
              {t("Required for Period of")}
            </h3>
            <div className="flex items-center w-full space-x-3 ">
              <TextField
                label="From"
                type="date"
                className="w-full lg:w-1/2"
                inputState={[AidFrom, setAidFrom]}
              />
              <TextField
                label="To"
                type="date"
                className="w-full lg:w-1/2"
                inputState={[AidTo, setAidTo]}
              />
            </div>

            <div className="flex items-center w-full">
              <h3 className="font-poppins text-left text-md w-full">
                {t("Total Amount required (per year)")}
              </h3>
              <TextField
                label={t("Total Amount required (per year)")}
                className="w-full"
                inputState={[GetAmount, setGetAmount]}
              />
            </div>
            <TextArea
              label={t("Purpose of Aid")}
              className="w-full"
              inputState={[Purpose, setPurpose]}
            />

            <TextArea
              label={t("Enter if any help to be done")}
              className="w-full"
              inputState={[AnyHelp, setAnyHelp]}
            />
          </div>
        </section>
      </div>

      <div className="w-full">
        <section className="w-full flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-1/2 flex-col space-y-1">
            <h1 className="text-3xl font-oswald">{t("Documents")}</h1>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col">
            <File label="Documents" fileState={[documents, setDocuments]} />
            <div className="flex items-center w-full space-x-2 mt-20">
              <Button
                filled
                className="w-full lg:w-1/2"
                onClick={(e) => handleSubmit(e)}
              >
                {t("Submit")}
              </Button>
              <Button className="w-full lg:w-1/2">{t("Cancel")}</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RequestForAid;
