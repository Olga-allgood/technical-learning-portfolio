// src/App.jsx

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import MathAdventureCaseStudy from "./pages/projects/MathAdventureCaseStudy";
import ExcelFormulaQuestCaseStudy from "./pages/projects/ExcelFormulaQuestCaseStudy";
import APIFundamentalsCaseStudy from "./pages/projects/APIFundamentalsCaseStudy";
import SQLFoundationsCaseStudy from "./pages/projects/SQLFoundationsCaseStudy";
import SATVocabularyCaseStudy from "./pages/projects/SATVocabularyCaseStudy";
import CustomerServiceCaseStudy from "./pages/projects/CustomerServiceCaseStudy";
import HospitalSafetyCaseStudy from "./pages/projects/HospitalSafetyCaseStudy";

function App() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Project Case Studies */}

      <Route
        path="/projects/math-adventure"
        element={<MathAdventureCaseStudy />}
      />

      <Route
        path="/projects/excel-formula-quest"
        element={<ExcelFormulaQuestCaseStudy />}
      />

      <Route
        path="/projects/api-fundamentals"
        element={<APIFundamentalsCaseStudy />}
      />

      <Route
        path="/projects/sql-foundations"
        element={<SQLFoundationsCaseStudy />}
      />

      <Route
        path="/projects/sat-vocabulary"
        element={<SATVocabularyCaseStudy />}
      />

      <Route
        path="/projects/customer-service"
        element={<CustomerServiceCaseStudy />}
      />

      <Route
        path="/projects/hospital-safety"
        element={<HospitalSafetyCaseStudy />}
      />
    </Routes>
  );
}

export default App;