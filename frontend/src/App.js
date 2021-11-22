import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React, { useState } from 'react';
import LandingPage from './components/landing/LandingPage';
import Index from './components/homepage/Index';
// import Register from './components/login/Register';



export default function App() {
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <LandingPage setToken={setToken} />
  // }

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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
        <Route path="/home" element={<Index />} />
        <Route path="/landing" element={<LandingPage />} />
        {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

