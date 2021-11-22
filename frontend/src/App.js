import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/landing/LandingPage';
import SpotifyButton from './components/landing/SpotifyButton';
import Index from './components/homepage/Index';



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
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/home" element={<Index />} />
        <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

