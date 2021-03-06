import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Chat from '../pages/Chatbot';

const UserPageWrapper = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("role") !== "user" ||
      localStorage.getItem("access_token") === null
    )
      navigate("/login");
  }, []);

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
