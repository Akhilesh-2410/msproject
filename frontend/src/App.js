import React, { useEffect, useState } from "react";
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
import UserPageWrapper from "./pages/UserPageWrapper";
import "./styles/tailwind.output.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

export const TransContext = React.createContext();

const App = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  return (
    <TransContext.Provider value={{ t, language, setLanguage }}>
      <div className="w-screen h-screen overflow-x-hidden bg-white">
        <BrowserRouter>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminWrapper />}>
              <Route path="submissions" element={<Submissions />} />
              <Route
                path="submissions/preview"
                element={<SubmissionPreview />}
              />
              <Route index element={<Navigate to="/admin/submissions" />} />
            </Route>
            <Route path="/test" element={<div>{t("Welcome to React")}</div>} />
            <Route path="/" element={<UserPageWrapper />}>
              <Route path="forms" element={<Outlet />}>
                <Route
                  path="request-aid/financial"
                  element={<RequestForAid />}
                />
                <Route
                  path="request-aid/non-financial"
                  element={<RequestForAidNonFin />}
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </TransContext.Provider>
  );
};

export default App;
