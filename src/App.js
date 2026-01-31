import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Subjects from "./pages/Subjects.js";
import Methodology from "./pages/Methodology.js";
import CivilServiceExams from "./pages/CivilServiceExams.js";
import InternationalMobility from "./pages/InternationalMobility.js";
import CookiesPolicy from "./pages/CookiesPolicy.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import TermsAndConditions from "./pages/TermsAndConditions.js";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/civilserviceexams" element={<CivilServiceExams />} />
        <Route path="/internationalmobility" element={<InternationalMobility />} />
        <Route path="/cookiespolicy" element={<CookiesPolicy />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
