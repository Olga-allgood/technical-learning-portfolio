// src/App.jsx

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import SQLFoundationsCaseStudy from "./pages/projects/SQLFoundationsCaseStudy";
import SATVocabularyCaseStudy from "./pages/projects/SATVocabularyCaseStudy";
import CustomerServiceCaseStudy from "./pages/projects/CustomerServiceCaseStudy";
import HospitalSafetyCaseStudy from "./pages/projects/HospitalSafetyCaseStudy";
import APIFundamentalsCaseStudy from "./pages/projects/APIFundamentalsCaseStudy";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
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

      <Route
        path="/projects/api-fundamentals"
        element={<APIFundamentalsCaseStudy />}
      />
    </Routes>
  );
}

export default App;