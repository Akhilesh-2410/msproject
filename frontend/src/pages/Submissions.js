import React, { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { GET_ALL_POST_URL, GET_USER_DETAIL_URL } from "../api/APIRoutes";

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios
      .get(GET_ALL_POST_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        setSubmissions(
          res.data.filter(
            (x) =>
              x.requirementType === "2" ||
              x.requirementType === "3" ||
              x.requirementType === "1"
          )
        );
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(submissions);
  }, [submissions]);

  return (
    <main className="w-full h-full font-poppins">
      <nav className="w-full flex p-6">
        <h1 className="font-oswald text-5xl font-medium">Admin Dashboard</h1>
      </nav>
      <section className="w-full flex items-center justify-start px-6">
        <button className="flex items-center justify-center space-x-2 p-2 rounded-md hover:bg-clinic-300">
          <FiFilter className="w-6 h-6 text-clinic-500" />
          <p className="text-lg text-clinic-500">Filter</p>
        </button>
      </section>
      <section className="w-full flex flex-col space-y-4 items-center justify-center px-6 mt-6 lg:pr-[10vw]">
        {submissions.map((x) => (
          <SubmissionCard
            key={x._id}
            name={x.userid}
            type={parseInt(x.requirementType)}
            uid={x.userid}
          />
        ))}
      </section>
    </main>
  );
};

export default Submissions;

export const SubmissionCard = ({ name, type, uid }) => {
  return (
    <div className="bg-clinic-300 w-full rounded-md shadow-md px-6 py-2 flex flex-col lg:flex-row items-start justify-between">
      <div className="">
        <h1 className="font-medium text-lg">{name}</h1>
        <h2 className="italic text-xs text-clinic-500">
          {" "}
          {type === 1 && "Request for Financial Aid"}
          {type === 2 && "Request for Non-Financial Aid"}
          {type === 3 && "Monthly update"}
        </h2>
      </div>
      <div className="flex items-center mt-4 lg:mt-0 w-full lg:w-fit justify-between lg:justify-center space-x-4">
        <div className="space-y-1">
          {/* <div className="flex items-center justify-center space-x-1">
            <AiOutlineCalendar className="text-clinic-500" />
            <p className="text-xs text-clinic-500">{date}</p>
          </div> */}
          <div className="flex items-center justify-center space-x-1">
            <p className="text-xs text-clinic-500">UID : </p>
            <p className="text-xs text-clinic-500">{uid}</p>
          </div>
        </div>
        <Link to={`/admin/submissions/preview?uid=${uid}&type=${type}`}>
          <button className="p-2 hover:bg-white rounded-md text-clinic-500 hover:shadow-lg">
            <FiExternalLink className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </div>
  );
};
