import React, { useContext, useEffect, useState } from "react";
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
import { DB } from "../App";

const RequestForAid = ({ db }) => {
  const options = ["No", "Yes"];
  const grade = [
    "Post Graduate",
    "Under Graduate",
    "Higher Secondary",
    "Secondary",
    "Primary Education",
  ];
  useEffect(
    () => {
      // create the store
      DB.version(1).stores({ formData: "id,value" });

      // perform a read/write transatiction on the new store
      DB.transaction("rw", DB.formData, async () => {
        // get the first and last name from the data
        const dbnameOfInstitute = await DB.formData.get("nameOfInstitute");
        const dbboardOfEducation = await DB.formData.get("boardOfEducation");
        const dbtypeOfInstitute = await DB.formData.get("typeOfInstitute");
        const dbcurrentGrade = await DB.formData.get("currentGrade");
        const dbpercentage10 = await DB.formData.get("percentage10");
        const dbpercentage12 = await DB.formData.get("percentage12");
        const dbcourse = await DB.formData.get("course");
        const dbcgpa = await DB.formData.get("cgpa");
        const dbifAssistance = await DB.formData.get("ifAssistance");
        const dbassistanceName = await DB.formData.get("assistanceName");
        const dbassistanceAmount = await DB.formData.get("assistanceAmount");
        const dbassistanceRenew = await DB.formData.get("assistanceRenew");
        const dbassistanceFrom = await DB.formData.get("assistanceFrom");
        const dbassistanceTo = await DB.formData.get("assistanceTo");
        const dbaidFrom = await DB.formData.get("aidFrom");
        const dbaidTo = await DB.formData.get("aidTo");
        const dbaidAmount = await DB.formData.get("aidAmount");
        const dbpurposeOfAid = await DB.formData.get("purposeOfAid");
        const dbanyHelp = await DB.formData.get("anyHelp");

        // if the first or last name fields have not be added, add them
        if (!dbnameOfInstitute)
          await DB.formData.add({ id: "nameOfInstitute", value: "" });
        if (!dbboardOfEducation)
          await DB.formData.add({ id: "boardOfEducation", value: "" });
        if (!dbtypeOfInstitute)
          await DB.formData.add({ id: "typeOfInstitute", value: "" });
        if (!dbcurrentGrade)
          await DB.formData.add({ id: "currentGrade", value: "" });
        if (!dbpercentage10)
          await DB.formData.add({ id: "percentage10", value: "" });
        if (!dbpercentage12)
          await DB.formData.add({ id: "percentage12", value: "" });
        if (!dbcourse) await DB.formData.add({ id: "course", value: "" });
        if (!dbcgpa) await DB.formData.add({ id: "cgpa", value: "" });
        if (!dbifAssistance)
          await DB.formData.add({ id: "ifAssistance", value: "" });
        if (!dbassistanceName)
          await DB.formData.add({ id: "assistanceName", value: "" });
        if (!dbassistanceAmount)
          await DB.formData.add({ id: "assistanceAmount", value: "" });
        if (!dbassistanceRenew)
          await DB.formData.add({ id: "assistanceRenew", value: "" });
        if (!dbassistanceFrom)
          await DB.formData.add({ id: "assistanceFrom", value: "" });
        if (!dbassistanceTo)
          await DB.formData.add({ id: "assistanceTo", value: "" });
        if (!dbaidFrom) await DB.formData.add({ id: "aidFrom", value: "" });
        if (!dbaidTo) await DB.formData.add({ id: "aidTo", value: "" });
        if (!dbaidAmount) await DB.formData.add({ id: "aidAmount", value: "" });
        if (!dbpurposeOfAid)
          await DB.formData.add({ id: "purposeOfAid", value: "" });
        if (!dbanyHelp) await DB.formData.add({ id: "anyHelp", value: "" });

        // set the initial values
        setNameOfInstitute(dbnameOfInstitute.value);
        setBoardOfEdu(dbboardOfEducation.value);
        setTypeOfEdu(dbtypeOfInstitute.value);
        setGrade(dbcurrentGrade.value);
        setPercentageTen(dbpercentage10.value);
        setPercentageTwel(dbpercentage12.value);
        setCourse(dbcourse.value);
        setCgpa(dbcgpa.value);
        setHelp(dbifAssistance.value);
        setAmount(dbassistanceAmount.value);
        setAssist(dbassistanceName.value);
        setRenew(dbassistanceRenew.value);
        setFinFrom(dbassistanceFrom.value);
        setFinTo(dbassistanceTo.value);
        setAidFrom(dbaidFrom.value);
        setAidTo(dbaidTo.value);
        setGetAmount(dbaidAmount.value);
        setPurpose(dbpurposeOfAid.value);
        setAnyHelp(dbanyHelp.value);
      }).catch((e) => {
        // log any errors
        console.log(e.stack || e);
      });

      // close the database connection if form is unmounted or the
      // database connection changes
      return () => DB.close();
    },
    // run effect whenever the database connection changes
    [DB]
  );

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
              id="nameOfInstitute"
            />
            <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-2 space-y-4 lg:space-y-0">
              <Dropdown
                options={["CBSE", "State Board", "ICSE"]}
                className="w-full"
                placeholder={t("Board of Education")}
                valueState={[boardOfEdu, setBoardOfEdu]} 
                id="boardOfEducation" 
              />
              <Dropdown
                options={["Private", "Public"]}
                className="w-full"
                placeholder={t("Type of Institute")}
                valueState={[TypeOfEdu, setTypeOfEdu]}
                id="typeOfInstitute"
              />
            </div>
            <Dropdown
              placeholder={t("Current Grade")}
              options={grade}
              className="w-full"
              valueState={[Grade, setGrade]}
              id="currentGrade"
            />
            <div className="flex flex-col lg:flex-row items-center w-full space-y-3 lg:space-y-0 lg:space-x-2">
              <TextField
                label={t("10th Percent.")}
                className="w-full lg:w-1/2"
                inputState={[PercentageTen, setPercentageTen]}
                id="percentage10"
              />
              <TextField
                label={t("12th Percent.")}
                className="w-full lg:w-1/2"
                inputState={[PercentageTwel, setPercentageTwel]}
                id="percentage12"
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
                id="course"
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
                id="cgpa"
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
                id="ifAssistance"
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
                id="assistanceName"
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
                id="assistanceFrom"
              />
              <TextField
                label="To"
                type="date"
                className="w-full lg:w-1/2"
                inputState={[FinTo, setFinTo]}
                id="assistanceTo"
              />
            </div>

            <div className="flex flex-col lg:flex-row space-y-3 lg:space-x-2 lg:space-y-0 items-center w-full">
              <TextField
                label={t("Total Amount received")}
                className="w-full"
                inputState={[Amount, setAmount]}
                id="assistanceAmount"
              />
              <Dropdown
                options={options}
                className="w-full"
                valueState={[Renew, setRenew]}
                placeholder={t("Will be renewed")}
                id="assistanceRenew"
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
                id="aidFrom"
              />
              <TextField
                label="To"
                type="date"
                className="w-full lg:w-1/2"
                inputState={[AidTo, setAidTo]}
                id="aidTo"
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
                id="aidAmount"
              />
            </div>
            <TextArea
              label={t("Purpose of Aid")}
              className="w-full"
              inputState={[Purpose, setPurpose]}
              id="purposeOfAid"
            />

            <TextArea
              label={t("Enter if any help to be done")}
              className="w-full"
              inputState={[AnyHelp, setAnyHelp]}
              id="anyHelp"
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
