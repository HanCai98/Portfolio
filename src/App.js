import './App.css';
import Homepage from './components/Homepage'
import Works from './components/Works';
import Personas from './components/Personas';
import Redesign from './components/Redesign';
import IterativeDesign from './components/IterativeDesign';
import Development from './components/Development';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    // <Homepage></Homepage>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/redesign" element={<Redesign />} />
          <Route path="/iterative-design" element={<IterativeDesign />} />
          <Route path="/development" element={<Development />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
