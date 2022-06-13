import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState("");
  const [authRole, setAuthRole] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const getAuthState = async () => {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("role");
    if (token && role) {
      //   const parsedTokens = JSON.parse(tokens);
      // configure axios headers
      //   API.defaults.headers["Authorization"] =
      //     "Bearer " + parsedTokens.accessToken;
      setAuthToken(token);
      setAuthRole(role);
      setIsAdmin(role === "admin");
      setIsUser(role === "user");
    } else {
      setAuthToken(null);
      setAuthRole(null);
    }
  };

  const setAuthState = async (access_token, role) => {
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("role", role);
    // configure axios headers
    // API.defaults.headers["Authorization"] = "Bearer " + auth.accessToken;
    setAuthToken(access_token);
    setAuthRole(role);
    setIsAdmin(role === "admin");
    setIsUser(role === "user");
  };

  const logout = () => {
    // API.delete(AUTH_LOGOUT, { data: { refreshToken: auth.refreshToken } })
    //   .then(() => {
    //   });
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    // API.defaults.headers["Authorization"] = "";
    setAuthToken(null);
    setAuthRole(null);
  };

  useEffect(() => {
    getAuthState();
  });

  return (
    <AuthContext.Provider
      value={{ isAdmin, isUser, authRole, setAuthState, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
