import CV from "@/page/CV";
import CvPage from "@/page/CvPage";
import CVTwo from "@/page/CVTwo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CvPage />} />
        <Route path="/cv-one" element={<CV />} />
        <Route path="/cv-two" element={<CVTwo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
