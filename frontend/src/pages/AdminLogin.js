import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { ADMIN_SIGNIN_URL } from "../api/APIRoutes";
import { useNavigate } from "react-router-dom";
import PopupContext from "../components/PopupContext";
import { AuthContext } from "../api/AuthProvider";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState("");

  const navigate = useNavigate();

  const { setPopup } = useContext(PopupContext);
  const { setAuthState } = useContext(AuthContext);

  const handleLogin = (e) => {
    axios
      .post(
        ADMIN_SIGNIN_URL,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setPopup("SUCCESS", "Admin Login Successful");
        setAuthState(res.data.token, "admin");
        localStorage.setItem("uid", null);
        navigate("/admin");
      })
      .catch((err) => {
        setPopup("ERROR", err.response.data.error);
        console.log("SIGNIN ERROR", err);
      });
  };

  return (
    <main className="h-screen w-screen flex justify-center items-center bg-clinic-300">
      <div className="section bg-white w-screen lg:w-[max(40vw,400px)] h-screen lg:h-fit px-6 py-20 space-y-6 flex flex-col shadow-lg rounded-md">
        <h1 className="font-oswald font-medium text-4xl">Login as Admin</h1>
        <TextField
          className="w-full"
          label="Username"
          inputState={[username, setUsername]}
        />
        <div className="flex items-center justify-center w-full space-x-2">
          <TextField
            className="w-full"
            label="Password"
            type={isPasswordShown ? "text" : "password"}
            inputState={[password, setPassword]}
          />
          <button
            className="p-1 border-2 border-clinic-500 rounded-md"
            onClick={(e) => setIsPasswordShown(!isPasswordShown)}
          >
            {isPasswordShown ? (
              <AiOutlineEye className="text-clinic-500 h-8 w-8" />
            ) : (
              <AiOutlineEyeInvisible className="text-clinic-500 h-8 w-8" />
            )}
          </button>
        </div>
        <Button
          label="Submit"
          filled
          className="w-full"
          onClick={(e) => handleLogin(e)}
        >
          Submit
        </Button>
        <button className="group w-full flex items-center justify-center">
          <p className="w-fit pb-1 border-b-white group-hover:border-b-clinic-500 border-b-2 text-center text-clinic-500">
            Back to Home
          </p>
        </button>
      </div>
    </main>
  );
};

export default AdminLogin;
