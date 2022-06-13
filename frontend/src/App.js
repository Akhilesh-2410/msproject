import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminWrapper from "./pages/AdminWrapper";
import RequestForAid from "./pages/RequestForAid";
import RequestForAidNonFin from "./pages/RequestForAidNonFin";
import SubmissionPreview from "./pages/SubmissionPreview";
import Submissions from "./pages/Submissions";
import MonthlyUpdate from "./pages/MonthlyUpdate";
import UserPageWrapper from "./pages/UserPageWrapper";
import "./styles/tailwind.output.css";
import { useTranslation } from "react-i18next";
import Landing from "./pages/Landing";
import CreateUID from "./pages/CreateUID";
import { PopupProvider } from "./components/PopupContext";
import Login from "./pages/Login";
import AuthProvider, { AuthContext } from "./api/AuthProvider";

export const TransContext = React.createContext();
export const formatDate = (date) =>
  `${date.split("-")[2]}/${date.split("-")[1]}/${date.split("-")[0]}`;

const App = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <TransContext.Provider value={{ t, language, setLanguage }}>
      <PopupProvider>
        <div className="w-screen h-screen overflow-x-hidden bg-white">
          <BrowserRouter>
            <Routes>
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminWrapper />}>
                <Route path="create-uid" element={<CreateUID />} />
                <Route path="submissions" element={<Submissions />} />
                <Route
                  path="submissions/preview"
                  element={<SubmissionPreview />}
                />
                <Route index element={<Navigate to="/admin/submissions" />} />
              </Route>
              <Route
                path="/test"
                element={<div>{t("Welcome to React")}</div>}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Outlet />}>
                <Route path="forms" element={<UserPageWrapper />}>
                  <Route
                    path="request-aid/financial"
                    element={<RequestForAid />}
                  />
                  <Route
                    path="request-aid/non-financial"
                    element={<RequestForAidNonFin />}
                  />
                  <Route
                    path="request-aid/monthly-update"
                    element={<MonthlyUpdate />}
                  />
                </Route>
                <Route index element={<Landing />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </PopupProvider>
    </TransContext.Provider>
  );
};

export default App;
