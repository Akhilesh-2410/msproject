import React from "react";
import { FiFilter } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

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
          description="Requested for Aid"
          date="24/JUN/2019"
          location="Maharashtra"
        />
        <SubmissionCard
          name="John Doe"
          description="Requested for Aid"
          date="24/JUN/2019"
          location="Maharashtra"
        />
        <SubmissionCard
          name="John Doe"
          description="Requested for Aid"
          date="24/JUN/2019"
          location="Maharashtra"
        />
      </section>
    </main>
  );
};

export default Submissions;

export const SubmissionCard = ({
  name,
  description,
  date,
  location,
  link = "",
}) => {
  return (
    <div className="bg-clinic-300 w-full rounded-md shadow-md px-6 py-2 flex flex-col lg:flex-row items-start justify-between">
      <div className="">
        <h1 className="font-medium text-lg">{name}</h1>
        <h2 className="italic text-xs text-clinic-500">{description}</h2>
      </div>
      <div className="flex items-center mt-4 lg:mt-0 w-full lg:w-fit justify-between lg:justify-center space-x-4">
        <div className="space-y-1">
          <div className="flex items-center justify-center space-x-1">
            <AiOutlineCalendar className="text-clinic-500" />
            <p className="text-xs text-clinic-500">{date}</p>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <HiOutlineLocationMarker className="text-clinic-500" />
            <p className="text-xs text-clinic-500">{location}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-white rounded-md text-clinic-500 hover:shadow-lg">
          <FiExternalLink className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
