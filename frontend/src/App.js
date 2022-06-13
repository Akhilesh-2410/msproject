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
import MonthlyUpdate from "./pages/MonthlyUpdate";
import UserPageWrapper from "./pages/UserPageWrapper";
import "./styles/tailwind.output.css";
import { useTranslation } from "react-i18next";
import Landing from "./pages/Landing";


export const TransContext = React.createContext();

const App = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState("ta");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

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
    </TransContext.Provider>
  );
};

export default App;
