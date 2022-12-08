import './App.css';
import Homepage from './components/Homepage'
import Works from './components/Works';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
