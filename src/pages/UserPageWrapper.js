import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Chat from "./Chatbot";

const UserPageWrapper = () => {
  return (
    <main className="h-screen w-screen overflow-x-hidden">
      <NavBar/>
      <div className="px-6 lg:px-[calc(100vw/12)] h-fit py-[96px]">
        <Outlet />
      </div>
      <Chat/>
    </main>
  );
};

export default UserPageWrapper;
