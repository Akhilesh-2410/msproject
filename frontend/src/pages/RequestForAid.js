import React, { useState } from "react";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import { useTranslation } from "react-i18next";

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
                valueState={[FinFrom, setFinFrom]}
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
                valueState={[FinFrom, setFinFrom]}
              />
              <TextField
                label="To"
                type="date"
                className="w-full lg:w-1/2"
                valueState={[FinTo, setFinTo]}
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
                valueState={[AidFrom, setAidFrom]}
              />
              <TextField
                label="To"
                type="date"
                className="w-full lg:w-1/2"
                valueState={[AidTo, setAidTo]}
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
            <div className="flex items-center w-full space-x-2">
              <Button filled className="w-full lg:w-1/2">
                {t("Submit")}
              </Button>
              <Button className="w-full lg:w-1/2">{t('Cancel')}</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RequestForAid;
