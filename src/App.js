import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/index";
import Rejected from "./views/rejected";
import Shortlisted from "./views/shortlisted";
import CandidateProfile from "./views/candidateProfile";

import Navbar from "./components/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rejected" element={<Rejected />} />
          <Route path="/shortlisted" element={<Shortlisted />} />
          <Route path="/candidate/:id" element={<CandidateProfile />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
