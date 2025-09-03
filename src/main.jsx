import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ProgramOverview from "./pages/ProgramOverview.jsx";
import Programs from "./pages/Programs.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        {/* HOME PAGE */}
        <Route index element={<App />} />

        {/* Programs & specific Program page routes */}
        <Route path="/programs" element={<Programs />}></Route>
        <Route path="programs/:id" element={<ProgramOverview />} />

        
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
