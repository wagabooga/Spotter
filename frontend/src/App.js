import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, { useState } from 'react';
import LandingPage from './components/landing/LandingPage';
import Home from './components/homepage/Index';







export default function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/landing">Landing</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              {/* <Link to="/register">Register</Link> */}
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

