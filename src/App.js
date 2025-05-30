import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Journal from './components/Journal';
import Metrics from './components/Metrics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/metrics" element={<Metrics />} />
      </Routes>
    </Router>
  );
}

export default App;
