// src/App.jsx

import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import SQLFoundationsCaseStudy from "./pages/projects/SQLFoundationsCaseStudy";
import SATVocabularyCaseStudy from "./pages/projects/SATVocabularyCaseStudy";

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
    </Routes>
  );
}

export default App;