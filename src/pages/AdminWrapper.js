import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FiDownloadCloud, FiLogOut } from "react-icons/fi";
import { RiAdminLine, RiUser3Line } from "react-icons/ri";
import Logo from "../assets/logo.png";

const AdminWrapper = () => {
  return (
    <main className="flex items-center justify-center h-screen w-screen relative overflow-hidden">
      <nav className="hidden lg:flex h-full w-[20vw] bg-clinic-700 py-6 shadow-lg lg:relative flex-col">
        <div className="px-6 w-full flex items-center justify-center mb-8">
          <img src={Logo} alt="" className="h-16" />
        </div>
        <Link to="/admin/submissions">
          <button className="px-6 py-3 w-full flex items-center justify-start space-x-3 hover:bg-clinic-500">
            <FiDownloadCloud className="text-white w-6 h-6" />
            <p className="text-white text-lg">Submissions</p>
          </button>
        </Link>
        <button className="px-6 py-3 w-full flex items-center justify-start space-x-3 hover:bg-clinic-500">
          <RiUser3Line className="text-white w-6 h-6" />
          <p className="text-white text-lg">Create UID</p>
        </button>
        <button className="px-6 py-3 w-full flex items-center justify-start space-x-3 hover:bg-clinic-500">
          <RiAdminLine className="text-white w-6 h-6" />
          <p className="text-white text-lg">Create Admin</p>
        </button>
        <div className="flex-1"></div>
        <button className="px-6 py-3 w-full flex items-center justify-start space-x-3 hover:bg-clinic-500">
          <FiLogOut className="text-white w-6 h-6" />
          <p className="text-white text-lg">Logout</p>
        </button>
      </nav>
      <nav className="block lg:hidden fixed bottom-0 p-6 w-screen">
        <div className="shadow-md rounded-lg bg-clinic-700 flex items-center justify-center p-2 w-full">
          <button className="p-2 flex flex-1 flex-col items-center justify-center">
            <FiDownloadCloud className="text-white w-6 h-6" />
            {/* <p className="text-xs text-white">Submissions</p> */}
          </button>
          <button className="p-2 flex flex-1 flex-col items-center justify-center">
            <RiUser3Line className="text-white w-6 h-6" />
            {/* <p className="text-xs text-white whitespace-nowrap">Create UID</p> */}
          </button>
          <button className="p-2 flex flex-1 flex-col items-center justify-center">
            <RiAdminLine className="text-white w-6 h-6" />
            {/* <p className="text-xs text-white whitespace-nowrap">Create Admin</p> */}
          </button>
          <button className="p-2 flex flex-1 flex-col items-center justify-center">
            <FiLogOut className="text-white w-6 h-6" />
            {/* <p className="text-xs text-white">Logout</p> */}
          </button>
        </div>
      </nav>
      <div className="flex-1 h-screen w-full overflow-y-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default AdminWrapper;
