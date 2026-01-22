import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import Subjects from "./pages/Subjects.js";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
