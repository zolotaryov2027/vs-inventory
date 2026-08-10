import { BrowserRouter, Routes, Route } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Users from "./pages/usersPage/usersPage.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Premises from "./pages/premises/premises.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<NotFound />} />
          <Route path="users" element={<Users />} />
          <Route path="premises" element={<Premises />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
