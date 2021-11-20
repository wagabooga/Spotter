import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LoginWithSpotify from './components/LoginWithSpotify';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return <Router>
    <div>
     <LoginButton />

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/login" element={<LoginWithSpotify />}/>
      </Routes>
    </div>
  </Router>
}

export default App;
