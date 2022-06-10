import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminWrapper from "./pages/AdminWrapper";
import RequestForAid from "./pages/RequestForAid";
import RequestForAidNonFin from "./pages/RequestForAidNonFin";
import Submissions from "./pages/Submissions";
import UserPageWrapper from "./pages/UserPageWrapper";
import "./styles/tailwind.output.css";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminWrapper />}>
            <Route path="submissions" element={<Submissions />} />
          </Route>
          <Route path="/" element={<UserPageWrapper />}>
            <Route path="forms" element={<Outlet />}>
              <Route path="request-aid/financial" element={<RequestForAid />} />
              <Route
                path="request-aid/non-financial"
                element={<RequestForAidNonFin />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
