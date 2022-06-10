import React from "react";
import { Outlet } from "react-router-dom";
import { FiDownloadCloud, FiLogOut } from "react-icons/fi";
import Logo from "../assets/logo.png";

const AdminWrapper = () => {
  return (
    <main className="flex items-center justify-center h-screen w-screen relative">
      <nav className="hidden lg:block h-screen w-[20vw] bg-clinic-700 py-6 shadow-lg lg:relative">
        <div className="px-6 w-full flex items-center justify-center mb-8">
          <img src={Logo} alt="" className="h-16" />
        </div>
        <button className="px-6 py-3 w-full flex items-center justify-start space-x-3 hover:bg-clinic-500">
          <FiDownloadCloud className="text-white w-6 h-6" />
          <p className="text-white text-lg">Submissions</p>
        </button>
        <button className="px-6 py-3 w-full flex items-center justify-start space-x-3 hover:bg-clinic-500">
          <FiDownloadCloud className="text-white w-6 h-6" />
          <p className="text-white text-lg">Submissions</p>
        </button>
        <button className="px-6 py-3 w-full flex items-center justify-start space-x-3 hover:bg-clinic-500">
          <FiLogOut className="text-white w-6 h-6" />
          <p className="text-white text-lg">Logout</p>
        </button>
      </nav>
      <nav className="block lg:hidden absolute bottom-0 p-6">
        <div className="shadow-md rounded-lg bg-clinic-700 flex items-center justify-center p-2 px-6">
          <button className="p-2 px-4 flex flex-col items-center justify-center">
            <FiDownloadCloud className="text-white w-6 h-6" />
            <p className="text-xs text-white w-[10ch]">Submissions</p>
          </button>
          <button className="p-2 px-4 flex flex-col items-center justify-center">
            <FiLogOut className="text-white w-6 h-6" />
            <p className="text-xs text-white w-[10ch]">Logout</p>
          </button>
        </div>
      </nav>
      <div className="flex-1 h-screen w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default AdminWrapper;
