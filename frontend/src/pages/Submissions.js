import React from "react";
import { FiFilter } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const Submissions = () => {
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
        <SubmissionCard
          name="John Doe"
          type={1}
          date="24/JUN/2019"
          uid="435456546"
        />
        <SubmissionCard
          name="John Doe"
          type={2}
          date="24/JUN/2019"
          uid="435456546"
        />
        <SubmissionCard
          name="John Doe"
          type={1}
          date="24/JUN/2019"
          uid="435456546"
        />
      </section>
    </main>
  );
};

export default Submissions;

export const SubmissionCard = ({
  name,
  type,
  date,
  uid,
}) => {
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
          <div className="flex items-center justify-center space-x-1">
            <AiOutlineCalendar className="text-clinic-500" />
            <p className="text-xs text-clinic-500">{date}</p>
          </div>
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
