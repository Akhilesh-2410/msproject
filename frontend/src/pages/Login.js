import React, { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { ADMIN_SIGNIN_URL, SIGNIN_URL } from "../api/APIRoutes";
import { useNavigate } from "react-router-dom";
import PopupContext from "../components/PopupContext";
import { formatDate } from "../App";
import { AuthContext } from "../api/AuthProvider";

const Login = () => {
  const [uid, setUid] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();

  const { setPopup } = useContext(PopupContext);
  const { setAuthState } = useContext(AuthContext);

  const handleLogin = (e) => {
    axios
      .post(
        SIGNIN_URL,
        { uid, dob: formatDate(dob) },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setPopup("SUCCESS", "Login Successful");
        setAuthState(res.data.token, "user");
        localStorage.setItem("uid", uid);
        navigate("/");
      })
      .catch((err) => {
        setPopup("ERROR", err.response.data.error);
        console.log("SIGNIN ERROR", err);
      });
  };

  const IMAGE_URL =
    "https://i.ibb.co/Z20btqx/nathan-dumlao-P5-MXt-Yfgmmw-unsplash.jpg";

  return (
    <main className="h-screen w-screen flex justify-center items-center bg-clinic-300">
      <div
        className="hidden lg:block lg:w-1/2 h-screen"
        style={{
          backgroundImage: `url("${IMAGE_URL}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex flex-col justify-start items-start lg:justify-center bg-white h-screen w-screen lg:w-1/2 px-6 lg:px-[calc(100vw/12)] py-20 space-y-6 shadow-lg rounded-md">
        <h1 className="font-oswald font-medium text-4xl">Login</h1>
        <TextField className="w-full" label="UID" inputState={[uid, setUid]} />
        <TextField
          className="w-full"
          label="Password"
          type={"date"}
          inputState={[dob, setDob]}
        />
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

export default Login;
