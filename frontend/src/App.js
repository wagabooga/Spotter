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
// import { useEffect } from 'react';

import Cookies from 'universal-cookie';


// cookies.set('myCat', 'Pacman', { path: '/' });




export default function App() {
  const cookies = new Cookies();
  let accessTokenFrontend = cookies.get('sampleCookie')

  // useEffect(() => {
  //   fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({ uris: [spotify_uri] }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${access_token}`
  //     },
  //   });
  // }, [])
  // const play = ({
  //   spotify_uri,
  //   playerInstance: {
  //     _options: {
  //       getOAuthToken
  //     }
  //   }
  // }) => {
  //   getOAuthToken(access_token => {
  //     fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
  //       method: 'PUT',
  //       body: JSON.stringify({ uris: [spotify_uri] }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${access_token}`
  //       },
  //     });
  //   });
  // };

  // const player = play({
  //   playerInstance: new Spotify.Player({ name: "..." }),
  //   spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
  // });
  // console.log("james", player)
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

